import { VNode, ComponentType } from "preact";
import { Button, Card, ButtonProps, CardProps } from "mrca-components";

// Type-safe component imports with proper typing
const ButtonComponent = Button as ComponentType<Omit<ButtonProps, 'children'> & { children: VNode | string }>;
const CardComponent = Card as ComponentType<Omit<CardProps, 'children'> & { children: VNode | string }>;

const App = (): VNode => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>MRCA Components Demo</h1>
      
      <div style={{ marginBottom: "20px" }}>
        <h2>Button Components</h2>
        <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
          <ButtonComponent variant="primary">Primary</ButtonComponent>
          <ButtonComponent variant="secondary">Secondary</ButtonComponent>
          <ButtonComponent variant="outline">Outline</ButtonComponent>
        </div>
        <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
          <ButtonComponent size="small">Small</ButtonComponent>
          <ButtonComponent size="medium">Medium</ButtonComponent>
          <ButtonComponent size="large">Large</ButtonComponent>
        </div>
        <ButtonComponent disabled>Disabled</ButtonComponent>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h2>Card Components</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
          <CardComponent title="Basic Card" subtitle="This is a basic card component">
            <p>This is the content of the card. You can put any content here.</p>
          </CardComponent>
          
          <CardComponent title="Card with Large Padding" padding="large" shadow="large">
            <p>This card has large padding and a large shadow effect.</p>
          </CardComponent>
          
          <CardComponent title="Card without Shadow" shadow="none">
            <p>This card has no shadow effect.</p>
          </CardComponent>
        </div>
      </div>
    </div>
  );
};

export default App; 