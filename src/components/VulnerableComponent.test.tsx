import { render, screen } from '@testing-library/react';
import VulnerableComponent from './VulnerableComponent';

describe('VulnerableComponent', () => {
  it('renders the content', () => {
    const testContent = '<p>Hello World</p>';
    render(<VulnerableComponent content={testContent} />);
    
    // Check if the content is rendered
    const contentElement = screen.getByTestId('vulnerable-content');
    expect(contentElement).toBeInTheDocument();
    expect(contentElement).toHaveTextContent('Hello World');
  });

  it('renders dangerous content (simulating XSS)', () => {
    // This test just confirms the component does what it's supposed to do (even if dangerous)
    const dangerousContent = '<img src=x onerror=alert(1)>';
    render(<VulnerableComponent content={dangerousContent} />);
    
    const contentElement = screen.getByTestId('vulnerable-content');
    expect(contentElement).toContainHTML(dangerousContent);
  });
});
