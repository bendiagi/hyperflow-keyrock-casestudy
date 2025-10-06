import React from 'react';
import './styles.css';

const BuildVsBuyContent: React.FC = () => {
  return (
    <section className="bvb-content-section" aria-label="Build vs Buy Content">
      <div className="bvb-content-container">
        <h3 className="solutions-subtitle bvb-content-preheading">Build vs Buy Analysis</h3>
        <h2 className="bvb-content-heading">Choosing Control Over Convenience</h2>
        <p className="bvb-content-body">
          When evaluating data tooling for crypto analytics, the decision came down to building in-house or buying existing SaaS platforms.
          Off-the-shelf tools offered quick setup but were expensive, opaque, and poorly suited to crypto’s data complexity.
          Building HyperFlow internally provided full control, lower costs, and the flexibility to tailor anomaly detection and GPT-powered insights to Keyrock’s needs.
        </p>
        <hr className="bvb-divider" />

        <div className="bvb-table-wrap">
          <table className="bvb-compare-table" aria-label="Build vs Buy comparison">
            <thead>
              <tr>
                <th>Criteria</th>
                <th>Build (HyperFlow)</th>
                <th>Buy (SaaS Platforms)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Cost</th>
                <td>Low, one-time development and minimal cloud costs</td>
                <td>High recurring subscription fees</td>
              </tr>
              <tr>
                <th scope="row">Customization</th>
                <td>Fully customizable for crypto-specific metrics and logic</td>
                <td>Limited to pre-defined metrics and dashboards</td>
              </tr>
              <tr>
                <th scope="row">Transparency</th>
                <td>Full control and visibility into detection algorithms</td>
                <td>Black-box logic, limited auditability</td>
              </tr>
              <tr>
                <th scope="row">Speed to Deploy</th>
                <td>Moderate — initial setup required</td>
                <td>Fast — ready-to-use out of the box</td>
              </tr>
              <tr>
                <th scope="row">Scalability</th>
                <td>Flexible — can evolve with internal infrastructure</td>
                <td>Constrained by vendor pricing tiers</td>
              </tr>
              <tr>
                <th scope="row">Integration</th>
                <td>Direct integration with GPT APIs and internal tools</td>
                <td>Limited or expensive API extensions</td>
              </tr>
              <tr>
                <th scope="row">Ownership</th>
                <td>Full ownership of data and architecture</td>
                <td>Dependent on third-party platform and uptime</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="bvb-content-body bvb-result" style={{ marginTop: '1.25rem' }}>
          <strong>Result:</strong> The internal build proved more cost-efficient, transparent, and adaptable — delivering faster iteration and deeper integration with Keyrock’s trading ecosystem.
        </p>
      </div>
    </section>
  );
};

export default BuildVsBuyContent;


