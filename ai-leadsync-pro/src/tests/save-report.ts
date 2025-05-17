// Execute tests and save report to file
import fs from 'fs';
import path from 'path';
import { executeTestsAndGenerateReport } from './generate-report';

async function saveTestReport() {
  console.log("Running tests and generating report...");
  
  try {
    const { testResults, htmlReport } = await executeTestsAndGenerateReport();
    
    if (!htmlReport) {
      throw new Error("HTML report was not generated");
    }
    
    // Save HTML report to file
    const reportDir = path.join(process.cwd(), 'test-reports');
    const reportPath = path.join(reportDir, `test-report-${new Date().toISOString().replace(/:/g, '-')}.html`);
    
    fs.writeFileSync(reportPath, htmlReport);
    console.log(`HTML report saved to: ${reportPath}`);
    
    // Save JSON results for reference
    const jsonPath = path.join(reportDir, `test-results-${new Date().toISOString().replace(/:/g, '-')}.json`);
    fs.writeFileSync(jsonPath, JSON.stringify(testResults, null, 2));
    console.log(`JSON results saved to: ${jsonPath}`);
    
    return {
      success: true,
      reportPath,
      jsonPath,
      passed: testResults.passed
    };
  } catch (error) {
    console.error("Error saving test report:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : String(error)
    };
  }
}

// Run when script is executed directly
saveTestReport();

export { saveTestReport };
