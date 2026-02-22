import React from 'react';

interface VulnerableComponentProps {
  content: string;
}

const VulnerableComponent: React.FC<VulnerableComponentProps> = ({ content }) => {
  // Vulnerability 1: Hardcoded credentials (SonarQube should detect this)
  const hardcodedSecret = "AWS_ACCESS_KEY_ID=AKIAIOSFODNN7EXAMPLE"; 
  
  return (
    <div className="p-4 border border-red-500 rounded-md">
      <h2 className="text-xl font-bold mb-2">Vulnerable Component</h2>
      <p className="mb-2">This component renders HTML directly, which is dangerous if the content is not sanitized.</p>
      
      {/* Vulnerability 2: XSS via dangerouslySetInnerHTML (SonarQube should detect this) */}
      <div 
        data-testid="vulnerable-content"
        dangerouslySetInnerHTML={{ __html: content }} 
      />
      
      <div className="mt-4 text-sm text-gray-500">
        Debug Info: {hardcodedSecret.substring(0, 5)}...
      </div>
    </div>
  );
};

export default VulnerableComponent;
