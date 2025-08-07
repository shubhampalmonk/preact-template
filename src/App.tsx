import { VNode } from "preact";

const App = (): VNode => {
  return (
    <button 
      style={{
        backgroundColor: "#1890ff", 
        color: "white", 
        border: "none", 
        padding: "8px 16px", 
        borderRadius: "6px", 
        cursor: "pointer"
      }}
    >
      Primary Button
    </button>
  );
};

export default App; 