// Test runner script for AI LeadSync Pro website
import { runAllTests } from './usability-accessibility';

// Run all tests and log results
async function executeTests() {
  console.log("Starting comprehensive website testing...");
  
  try {
    const testResults = await runAllTests();
    
    console.log("=== TEST RESULTS SUMMARY ===");
    console.log(`Timestamp: ${testResults.timestamp}`);
    console.log(`Overall Status: ${testResults.passed ? 'PASSED' : 'FAILED'}`);
    
    console.log("\n=== Cross-Browser Testing ===");
    console.log(`Total Tests: ${testResults.results.crossBrowser.total}`);
    console.log(`Passed: ${testResults.results.crossBrowser.passed}`);
    console.log(`Failed: ${testResults.results.crossBrowser.failed}`);
    
    console.log("\n=== Accessibility Testing ===");
    console.log(`Status: ${testResults.results.accessibility.passed ? 'PASSED' : 'FAILED'}`);
    console.log(`Violations: ${testResults.results.accessibility.violations?.length || 0}`);
    
    console.log("\n=== Performance Testing ===");
    console.log(`Status: ${testResults.results.performance.passed ? 'PASSED' : 'FAILED'}`);
    if (testResults.results.performance.evaluation) {
      console.log(`LCP: ${testResults.results.performance.metrics.LCP}ms (${testResults.results.performance.evaluation.LCP})`);
      console.log(`FID: ${testResults.results.performance.metrics.FID}ms (${testResults.results.performance.evaluation.FID})`);
      console.log(`CLS: ${testResults.results.performance.metrics.CLS} (${testResults.results.performance.evaluation.CLS})`);
    }
    
    console.log("\n=== User Flow Testing ===");
    console.log(`Total Flows: ${testResults.results.userFlows.total}`);
    console.log(`Passed: ${testResults.results.userFlows.passed}`);
    console.log(`Failed: ${testResults.results.userFlows.failed}`);
    
    console.log("\n=== Mobile Responsiveness Testing ===");
    console.log(`Total Devices: ${testResults.results.mobileResponsiveness.total}`);
    console.log(`Passed: ${testResults.results.mobileResponsiveness.passed}`);
    console.log(`Failed: ${testResults.results.mobileResponsiveness.failed}`);
    
    // Generate detailed report
    const reportData = {
      timestamp: testResults.timestamp,
      summary: {
        passed: testResults.passed,
        crossBrowserPassed: testResults.results.crossBrowser.failed === 0,
        accessibilityPassed: testResults.results.accessibility.passed,
        performancePassed: testResults.results.performance.passed,
        userFlowsPassed: testResults.results.userFlows.failed === 0,
        mobileResponsivenessPassed: testResults.results.mobileResponsiveness.failed === 0
      },
      details: testResults.results
    };
    
    // In a real implementation, this would save to a file or database
    console.log("\nDetailed report generated:", JSON.stringify(reportData, null, 2));
    
    return reportData;
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
executeTests();

export { executeTests };
