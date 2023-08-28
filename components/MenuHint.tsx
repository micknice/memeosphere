import React, { useState } from 'react';

const MenuItemWithContextMenu = ({ text }) => {
  const [showContextMenu, setShowContextMenu] = useState(false);

  const handleMouseOver = () => {
    setShowContextMenu(true);
  };

  const handleMouseLeave = () => {
    setShowContextMenu(false);
  };

  return (
    
      {text}
      {showContextMenu && (
        <div className="">
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
          </ul>
        </div>
      )}
    
  );
};

export default MenuItemWithContextMenu;