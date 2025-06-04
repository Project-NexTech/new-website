import { useState, useRef, useEffect } from "react";
import { useHover } from "../hooks/useHover.tsx";
import { Link } from "react-router-dom";

const resourceSections = [
  { 
    label: 'Parents/students:', 
    items: [
      { text: '• Course details and upcoming classes: ', linkText: 'Programs ↗', to: '/programs' },
      { text: '• See our program hosts\' websites: ', linkText: 'Partners ↗', to: '/partners' }
    ]
  },
  { 
    label: 'Anyone curious:', 
    items: [
      { text: '• Mission and founding: ', linkText: 'About ↗', to: '/about' },
      { text: '• Benefits for students and volunteers: ', linkText: 'Impact ↗', to: '/impact' },
      { text: '• How we work with our partners ', linkText: 'Partners ↗', to: '/partners' }
    ]
  },
  { 
    label: 'Prospective volunteers:', 
    items: [
      { text: '• What our volunteers do: ', linkText: 'Volunteers ↗', to: '/volunteers' },
      { text: '• Join our volunteer team: ', linkText: 'Contribute ↗', to: '/contribute' },
      { text: '• The subjects we teach: ', linkText: 'Programs ↗', to: '/programs' }
    ]
  },
  { 
    label: 'Libraries, schools, or organizations:', 
    items: [
      { text: '• The courses we offer: ', linkText: 'Programs ↗', to: '/programs' },
      { text: '• How we work with our program hosts: ', linkText: 'Partners ↗', to: '/partners' },
      { text: '• Contact us to teach at your location: ', linkText: 'Contact ↗', to: '/contact' }
    ]
  },
  { 
    label: 'Potential donors, sponsors, or partners:', 
    items: [
      { text: '• How your support helps: ', linkText: 'Impact ↗', to: '/impact' },
      { text: '• How our partners support us: ', linkText: 'Partners ↗', to: '/partners' },
      { text: '• Become a sponsor or donor: ', linkText: 'Contribute ↗', to: '/contribute' }
    ]
  },
];

export default function Accordian() {
    const [isHovered, hoverProps] = useHover();
    const [expanded, setExpanded] = useState(Array(resourceSections.length).fill(false));
    const [resourceClosing, setResourceClosing] = useState(Array(resourceSections.length).fill(false));
    const [shouldAutoCycle, setAutoCycle ] = useState(true);
    const timeoutRefs : React.RefObject<NodeJS.Timeout[]> = useRef([]);

    const cycleSequence = async (timeouts : NodeJS.Timeout[]) => {
        
        // await new Promise<void>(resolve => timeouts.push(setTimeout(() => {
        //   setExpanded(prev => {
        //     const newExpanded = Array(5).fill(false);
        //     newExpanded[0] = true;  // Open first
        //     return newExpanded;
        //   });
        //   resolve();
        // }, 2000)));  // Step 1: 2 seconds
        
        for (let i = 0; i < 5; i++) {  // Steps 2-6
          if (!shouldAutoCycle) break;  // Stop if user interacts
          await new Promise<void>(resolve => timeouts.push(setTimeout(() => {
            setExpanded(prev => {
              const newExpanded = Array(resourceSections.length).fill(false);
              newExpanded[(i + 1) % 5] = true;  // Open next (or first after fifth)
              return newExpanded;
            });
            resolve();
          }, 5000)));
        }
        if (shouldAutoCycle) cycleSequence(timeouts);  // Loop back if still active
      };

    const handleHover = () => {
        if(isHovered) {
            setAutoCycle(false);
        }
    }

    const handleCycle = () => {
        handleHover();
        if(shouldAutoCycle) {
            cycleSequence(timeoutRefs.current);
        }

        return () => timeoutRefs.current.forEach(clearTimeout);
    }

    const toggleExpand = (idx : number) => {
        setAutoCycle(false);  // Stop auto-cycling on user interaction
        timeoutRefs.current.forEach(clearTimeout);  // Clear all timeouts
        if (expanded[idx]) {
        // Start closing animation
        setResourceClosing(prev => prev.map((v, i) => (i === idx ? true : v)));
        setTimeout(() => {
            setExpanded(prev => prev.map((v, i) => (i === idx ? false : v)));
            setResourceClosing(prev => prev.map((v, i) => (i === idx ? false : v)));
        }, 250);  // Match animation duration
        } else {
            setExpanded(prev => prev.map((v, i) => (i === idx ? true : v)));
        }
    }

    useEffect(handleCycle, [shouldAutoCycle]);

    return(
        <div className="resource-sections">
            {resourceSections.map((section, idx) => (
                <div {...hoverProps} key={idx} className="resource-section">
                <button className="resource-toggle" onClick={() => toggleExpand(idx)} aria-expanded={expanded[idx]}>
                    <span className={`resource-arrow${expanded[idx] ? ' expanded' : ''}`}>›</span>
                    <span className="resource-label">{section.label}</span>
                </button>
                {(expanded[idx] || resourceClosing[idx]) && (
                    <div className={`resource-details${resourceClosing[idx] ? ' closing' : ''}`}>
                    {section.items.map((item, index) => (
                        <span key={index}>
                        {item.text}<Link to={item.to} rel="noopener noreferrer">{item.linkText}</Link><br />
                        </span>
                    ))}
                    </div>
                )}
                </div>
            ))}
            </div>
    );
}