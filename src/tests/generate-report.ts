// Test execution and report generation for AI LeadSync Pro website
import { runAllTests } from './usability-accessibility';

// Function to generate HTML report from test results
function generateHTMLReport(testResults: any) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AI LeadSync Pro - Website Test Report</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }
    h1, h2, h3 {
      color: #2563eb;
    }
    .summary {
      background-color: #f3f4f6;
      padding: 20px;
      border-radius: 8px;
      margin-bottom: 30px;
    }
    .passed {
      color: #10b981;
      font-weight: bold;
    }
    .failed {
      color: #ef4444;
      font-weight: bold;
    }
    .needs-improvement {
      color: #f59e0b;
      font-weight: bold;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 20px;
    }
    th, td {
      padding: 12px;
      text-align: left;
      border-bottom: 1px solid #ddd;
    }
    th {
      background-color: #f3f4f6;
    }
    .section {
      margin-bottom: 40px;
    }
    .issue {
      background-color: #fee2e2;
      padding: 10px;
      border-radius: 4px;
      margin-top: 5px;
    }
  </style>
</head>
<body>
  <h1>AI LeadSync Pro Website Test Report</h1>
  <p>Generated on: ${new Date(testResults.timestamp).toLocaleString()}</p>
  
  <div class="summary">
    <h2>Summary</h2>
    <p>Overall Status: <span class="${testResults.passed ? 'passed' : 'failed'}">${testResults.passed ? 'PASSED' : 'FAILED'}</span></p>
    <ul>
      <li>Cross-Browser Compatibility: <span class="${testResults.results.crossBrowser.failed === 0 ? 'passed' : 'failed'}">${testResults.results.crossBrowser.failed === 0 ? 'PASSED' : 'FAILED'}</span></li>
      <li>Accessibility: <span class="${testResults.results.accessibility.passed ? 'passed' : 'failed'}">${testResults.results.accessibility.passed ? 'PASSED' : 'FAILED'}</span></li>
      <li>Performance: <span class="${testResults.results.performance.passed ? 'passed' : 'failed'}">${testResults.results.performance.passed ? 'PASSED' : 'FAILED'}</span></li>
      <li>User Flows: <span class="${testResults.results.userFlows.failed === 0 ? 'passed' : 'failed'}">${testResults.results.userFlows.failed === 0 ? 'PASSED' : 'FAILED'}</span></li>
      <li>Mobile Responsiveness: <span class="${testResults.results.mobileResponsiveness.failed === 0 ? 'passed' : 'failed'}">${testResults.results.mobileResponsiveness.failed === 0 ? 'PASSED' : 'FAILED'}</span></li>
    </ul>
  </div>
  
  <div class="section">
    <h2>Cross-Browser Testing</h2>
    <p>Total Tests: ${testResults.results.crossBrowser.total} | Passed: ${testResults.results.crossBrowser.passed} | Failed: ${testResults.results.crossBrowser.failed}</p>
    
    <table>
      <thead>
        <tr>
          <th>Browser</th>
          <th>Viewport</th>
          <th>Status</th>
          <th>Issues</th>
        </tr>
      </thead>
      <tbody>
        ${testResults.results.crossBrowser.results.map((result: any) => `
          <tr>
            <td>${result.browser}</td>
            <td>${result.viewport}</td>
            <td class="${result.passed ? 'passed' : 'failed'}">${result.passed ? 'PASSED' : 'FAILED'}</td>
            <td>
              ${result.issues.length > 0 ? 
                result.issues.map((issue: string) => `<div class="issue">${issue}</div>`).join('') : 
                'No issues detected'}
            </td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  </div>
  
  <div class="section">
    <h2>Accessibility Testing</h2>
    <p>Status: <span class="${testResults.results.accessibility.passed ? 'passed' : 'failed'}">${testResults.results.accessibility.passed ? 'PASSED' : 'FAILED'}</span></p>
    
    ${testResults.results.accessibility.violations && testResults.results.accessibility.violations.length > 0 ? `
      <h3>Violations</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Impact</th>
            <th>Description</th>
            <th>Elements</th>
          </tr>
        </thead>
        <tbody>
          ${testResults.results.accessibility.violations.map((violation: any) => `
            <tr>
              <td>${violation.id}</td>
              <td class="failed">${violation.impact}</td>
              <td>${violation.description}</td>
              <td>${violation.nodes.map((node: any) => `<div class="issue">${node.html}</div>`).join('')}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    ` : '<p>No accessibility violations detected.</p>'}
    
    <h3>Passes</h3>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Impact</th>
          <th>Nodes</th>
        </tr>
      </thead>
      <tbody>
        ${testResults.results.accessibility.passes.map((pass: any) => `
          <tr>
            <td>${pass.id}</td>
            <td>${pass.impact}</td>
            <td>${pass.nodes}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  </div>
  
  <div class="section">
    <h2>Performance Testing</h2>
    <p>Status: <span class="${testResults.results.performance.passed ? 'passed' : 'failed'}">${testResults.results.performance.passed ? 'PASSED' : 'FAILED'}</span></p>
    
    <h3>Core Web Vitals</h3>
    <table>
      <thead>
        <tr>
          <th>Metric</th>
          <th>Value</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Largest Contentful Paint (LCP)</td>
          <td>${testResults.results.performance.metrics.LCP.toFixed(2)} ms</td>
          <td class="${testResults.results.performance.evaluation.LCP === 'good' ? 'passed' : testResults.results.performance.evaluation.LCP === 'needs improvement' ? 'needs-improvement' : 'failed'}">
            ${testResults.results.performance.evaluation.LCP}
          </td>
        </tr>
        <tr>
          <td>First Input Delay (FID)</td>
          <td>${testResults.results.performance.metrics.FID.toFixed(2)} ms</td>
          <td class="${testResults.results.performance.evaluation.FID === 'good' ? 'passed' : testResults.results.performance.evaluation.FID === 'needs improvement' ? 'needs-improvement' : 'failed'}">
            ${testResults.results.performance.evaluation.FID}
          </td>
        </tr>
        <tr>
          <td>Cumulative Layout Shift (CLS)</td>
          <td>${testResults.results.performance.metrics.CLS.toFixed(3)}</td>
          <td class="${testResults.results.performance.evaluation.CLS === 'good' ? 'passed' : testResults.results.performance.evaluation.CLS === 'needs improvement' ? 'needs-improvement' : 'failed'}">
            ${testResults.results.performance.evaluation.CLS}
          </td>
        </tr>
      </tbody>
    </table>
    
    <h3>Other Metrics</h3>
    <table>
      <thead>
        <tr>
          <th>Metric</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Time to First Byte (TTFB)</td>
          <td>${testResults.results.performance.metrics.TTFB.toFixed(2)} ms</td>
        </tr>
        <tr>
          <td>First Contentful Paint (FCP)</td>
          <td>${testResults.results.performance.metrics.FCP.toFixed(2)} ms</td>
        </tr>
        <tr>
          <td>Time to Interactive (TTI)</td>
          <td>${testResults.results.performance.metrics.TTI.toFixed(2)} ms</td>
        </tr>
        <tr>
          <td>Resource Count</td>
          <td>${testResults.results.performance.metrics.resourceCount}</td>
        </tr>
        <tr>
          <td>Total Resource Size</td>
          <td>${testResults.results.performance.metrics.totalResourceSize} KB</td>
        </tr>
        <tr>
          <td>DOM Nodes</td>
          <td>${testResults.results.performance.metrics.domNodes}</td>
        </tr>
        <tr>
          <td>JS Execution Time</td>
          <td>${testResults.results.performance.metrics.jsExecutionTime.toFixed(2)} ms</td>
        </tr>
      </tbody>
    </table>
  </div>
  
  <div class="section">
    <h2>User Flow Testing</h2>
    <p>Total Flows: ${testResults.results.userFlows.total} | Passed: ${testResults.results.userFlows.passed} | Failed: ${testResults.results.userFlows.failed}</p>
    
    <table>
      <thead>
        <tr>
          <th>Flow</th>
          <th>Steps</th>
          <th>Status</th>
          <th>Issues</th>
        </tr>
      </thead>
      <tbody>
        ${testResults.results.userFlows.flows.map((flow: any) => `
          <tr>
            <td>${flow.name}</td>
            <td>${flow.steps.join('<br>')}</td>
            <td class="${flow.passed ? 'passed' : 'failed'}">${flow.passed ? 'PASSED' : 'FAILED'}</td>
            <td>
              ${flow.issues.length > 0 ? 
                flow.issues.map((issue: string) => `<div class="issue">${issue}</div>`).join('') : 
                'No issues detected'}
            </td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  </div>
  
  <div class="section">
    <h2>Mobile Responsiveness Testing</h2>
    <p>Total Devices: ${testResults.results.mobileResponsiveness.total} | Passed: ${testResults.results.mobileResponsiveness.passed} | Failed: ${testResults.results.mobileResponsiveness.failed}</p>
    
    <table>
      <thead>
        <tr>
          <th>Device</th>
          <th>Status</th>
          <th>Issues</th>
        </tr>
      </thead>
      <tbody>
        ${testResults.results.mobileResponsiveness.results.map((result: any) => `
          <tr>
            <td>${result.device}</td>
            <td class="${result.passed ? 'passed' : 'failed'}">${result.passed ? 'PASSED' : 'FAILED'}</td>
            <td>
              ${result.issues.length > 0 ? 
                result.issues.map((issue: string) => `<div class="issue">${issue}</div>`).join('') : 
                'No issues detected'}
            </td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  </div>
</body>
</html>
  `;
}

// Run all tests and generate report
async function executeTestsAndGenerateReport() {
  console.log("Starting comprehensive website testing...");
  
  try {
    const testResults = await runAllTests();
    
    // Generate HTML report
    const htmlReport = generateHTMLReport(testResults);
    
    // In a real implementation, this would save to a file
    console.log("HTML report generated successfully");
    
    return {
      testResults,
      htmlReport
    };
  } catch (error) {
    console.error("Error running tests:", error);
    return {
      timestamp: new Date().toISOString(),
      passed: false,
      error: error instanceof Error ? error.message : String(error)
    };
  }
}

// Execute tests when this script is run
executeTestsAndGenerateReport();

export { executeTestsAndGenerateReport };
