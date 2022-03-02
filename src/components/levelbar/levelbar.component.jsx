import React, { useState, useEffect } from 'react';

import './levelbar.styles.css';

function LevelBar({ level = 3 }) {
    const [levelBars, setLevelBars] = useState([]);

    useEffect(() => {
        shouldRenderLevelBars();
    }, []);

    function shouldRenderLevelBars() {
        let bars = [];
        let activeBars = level;
        for (let column = 0; column < 5; column++) {
            if (activeBars > 0) {
                bars.push(
                    <div
                        key={column}
                        className="level__bar level__bar--active"
                    />
                );

                activeBars--;
            } else {
                bars.push(<div key={column} className="level__bar" />);
            }
        }

        setLevelBars(bars);
    }

    return <div className="level">{levelBars}</div>;
}

LevelBar.displayName = 'LevelBar';
export default LevelBar;
