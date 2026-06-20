import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import { proposalData } from '../../data/proposalData';

const styles = StyleSheet.create({
  page: { padding: 40, fontFamily: 'Helvetica', backgroundColor: '#FFFFFF', paddingBottom: 80 },
  
  // Primary Header (Page 1 Only)
  primaryHeaderContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', borderBottomWidth: 2, borderBottomColor: '#000000', paddingBottom: 15, marginBottom: 25 },
  brandContainer: { flexDirection: 'row', alignItems: 'center' },
  logo: { width: 40, height: 40, objectFit: 'contain', marginRight: 12 },
  brandName: { fontSize: 18, fontFamily: 'Helvetica-Bold', color: '#000000', letterSpacing: 0.5 },
  quoteDetails: { textAlign: 'right' },
  quoteTitle: { fontSize: 20, fontFamily: 'Helvetica-Bold', color: '#000000', letterSpacing: 1, marginBottom: 4 },
  quoteText: { fontSize: 10, color: '#000000', marginBottom: 3, fontFamily: 'Helvetica-Bold' },

  // Secondary Header (Pages 2+)
  secondaryHeaderContainer: { flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: '#CBD5E1', paddingBottom: 10, marginBottom: 25 },
  secondaryHeaderText: { fontSize: 9, color: '#64748B', fontFamily: 'Helvetica-Bold', textTransform: 'uppercase', letterSpacing: 0.5 },
  
  // Client Info Box
  clientBox: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 30 },
  clientCol: { width: '45%' },
  clientLabel: { fontSize: 9, color: '#000000', fontFamily: 'Helvetica-Bold', marginBottom: 5, textTransform: 'uppercase', letterSpacing: 0.5 },
  clientValueTitle: { fontSize: 13, fontFamily: 'Helvetica-Bold', color: '#000000', marginBottom: 3 },
  clientValueText: { fontSize: 11, color: '#000000', lineHeight: 1.4 },

  // Typography
  sectionTitle: { fontSize: 14, fontFamily: 'Helvetica-Bold', color: '#000000', textTransform: 'uppercase', letterSpacing: 0.5, borderBottomWidth: 1, borderBottomColor: '#000000', paddingBottom: 5, marginBottom: 15, marginTop: 20 },
  paragraph: { fontSize: 11, color: '#000000', lineHeight: 1.6, marginBottom: 10 },
  bulletItem: { flexDirection: 'row', marginBottom: 8, paddingLeft: 5 },
  bulletPoint: { width: 15, fontSize: 11, color: '#000000', fontFamily: 'Helvetica-Bold' },
  bulletText: { flex: 1, fontSize: 11, color: '#000000', lineHeight: 1.5 },
  boldText: { fontFamily: 'Helvetica-Bold', color: '#000000' },

  // Table Styles
  table: { width: '100%', marginBottom: 30, marginTop: 10 },
  tableHeader: { flexDirection: 'row', backgroundColor: '#F1F5F9', borderBottomWidth: 2, borderBottomColor: '#000000', paddingVertical: 8, paddingHorizontal: 5 },
  tableRow: { flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#CBD5E1', paddingVertical: 10, paddingHorizontal: 5 },
  tableTotalRow: { flexDirection: 'row', borderTopWidth: 2, borderTopColor: '#000000', paddingVertical: 10, paddingHorizontal: 5, marginTop: 5 },
  colDesc: { width: '55%' },
  colQty: { width: '10%', textAlign: 'center' },
  colRate: { width: '15%', textAlign: 'right' },
  colAmount: { width: '20%', textAlign: 'right' },
  thText: { fontSize: 10, fontFamily: 'Helvetica-Bold', color: '#000000', textTransform: 'uppercase' },
  tdText: { fontSize: 11, color: '#000000' },
  tdBold: { fontSize: 11, fontFamily: 'Helvetica-Bold', color: '#000000' },

  // Signatures
  signatureSection: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 60, paddingTop: 20 },
  sigBox: { width: '40%' },
  sigLine: { borderBottomWidth: 1, borderBottomColor: '#000000', height: 40, marginBottom: 5 },
  sigName: { fontSize: 12, fontFamily: 'Helvetica-Bold', color: '#000000' },
  sigTitle: { fontSize: 10, color: '#000000', textTransform: 'uppercase', marginTop: 3 },

  // Page Footer (Initial Blocks)
  pageFooter: { position: 'absolute', bottom: 30, left: 40, right: 40, flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 1, borderTopColor: '#CBD5E1', paddingTop: 10 },
  footerText: { fontSize: 9, color: '#000000', fontFamily: 'Helvetica-Bold' },
  initialsBox: { flexDirection: 'row', gap: 20 },
  initialLine: { fontSize: 9, color: '#000000', fontFamily: 'Helvetica-Bold' }
});

// Primary Header for Page 1
const PrimaryHeader = () => (
  <View style={styles.primaryHeaderContainer}>
    <View style={styles.brandContainer}>
      <Image style={styles.logo} src="/logo.png" />
      <Text style={styles.brandName}>BRC HUB LLP</Text>
    </View>
    <View style={styles.quoteDetails}>
      <Text style={styles.quoteTitle}>QUOTATION</Text>
      <Text style={styles.quoteText}>Date: {proposalData.lastUpdated}</Text>
      <Text style={styles.quoteText}>Valid For: 30 Days</Text>
      <Text style={styles.quoteText}>Timeline: {proposalData.estimatedDuration}</Text>
    </View>
  </View>
);

// Secondary Header for Pages 2+
const SecondaryHeader = () => (
  <View style={styles.secondaryHeaderContainer}>
    <Text style={styles.secondaryHeaderText}>{proposalData.projectName} • Technical Proposal</Text>
    <Text style={styles.secondaryHeaderText}>BRC HUB LLP</Text>
  </View>
);

// Reusable Footer Component
const DocumentFooter = ({ pageNumber }: { pageNumber: string }) => (
  <View style={styles.pageFooter} fixed>
    <Text style={styles.footerText}>Confidential • BRC HUB LLP • Page {pageNumber}</Text>
    <View style={styles.initialsBox}>
      <Text style={styles.initialLine}>Client Initials: ___________</Text>
      <Text style={styles.initialLine}>BRC HUB Initials: ___________</Text>
    </View>
  </View>
);

export const ProposalPDF = () => (
  <Document>
    {/* PAGE 1: OBJECTIVES & WHY US */}
    <Page size="A4" style={styles.page}>
      <PrimaryHeader />
      
      <View style={styles.clientBox}>
        <View style={styles.clientCol}>
          <Text style={styles.clientLabel}>Prepared For</Text>
          <Text style={styles.clientValueTitle}>Mr. {proposalData.clientName}</Text>
          <Text style={styles.clientValueText}>Project: {proposalData.projectName}</Text>
          <Text style={styles.clientValueText}>Engagement: {proposalData.purpose}</Text>
        </View>
        <View style={styles.clientCol}>
          <Text style={styles.clientLabel}>Prepared By</Text>
          <Text style={styles.clientValueTitle}>BRC HUB LLP</Text>
          <Text style={styles.clientValueText}>Engineering & Architecture Team</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Project Goals</Text>
      {proposalData.objectives.map((obj, i) => (
        <View key={i} style={styles.bulletItem}>
          <Text style={styles.bulletPoint}>{i + 1}.</Text>
          <Text style={styles.bulletText}><Text style={styles.boldText}>{obj.title}:</Text> {obj.description}</Text>
        </View>
      ))}

      <Text style={styles.sectionTitle}>Why Choose BRC HUB LLP</Text>
      <View style={styles.bulletItem}>
        <Text style={styles.bulletPoint}>•</Text>
        <Text style={styles.bulletText}>We build prototypes that look and feel production-ready. Investors interact with the real product rendered inside a pixel-perfect phone frame in their browser.</Text>
      </View>
      <View style={styles.bulletItem}>
        <Text style={styles.bulletPoint}>•</Text>
       <Text style={styles.bulletText}>End-to-end execution: UI/UX, React + Vite, backend, Gmail OAuth parsing, AI document ingestion, and AI chat—one team, one roof.</Text>
      </View>
      <View style={styles.bulletItem}>
        <Text style={styles.bulletPoint}>•</Text>
        <Text style={styles.bulletText}>Rapid {proposalData.estimatedDuration} delivery, perfectly timed to accelerate your funding conversations.</Text>
      </View>
      <View style={styles.bulletItem}>
        <Text style={styles.bulletPoint}>•</Text>
        <Text style={styles.bulletText}>Every backend component built here carries directly into Phase 1. No throwaway code, no duplicate cost.</Text>
      </View>

      <DocumentFooter pageNumber="1" />
    </Page>

    {/* PAGE 2: TIMELINE & COMMERCIAL BREAKDOWN */}
    <Page size="A4" style={styles.page}>
      <SecondaryHeader />
      
      <Text style={styles.sectionTitle}>Estimated Timeline</Text>
      {proposalData.timeline.map((item, i) => (
        <View key={i} style={styles.bulletItem}>
          <Text style={styles.bulletPoint}>{i + 1}.</Text>
          <Text style={styles.bulletText}><Text style={styles.boldText}>{item.week} - {item.title}:</Text> {item.description}</Text>
        </View>
      ))}

      <Text style={styles.sectionTitle}>Commercial Breakdown</Text>
      <View style={styles.table}>
        <View style={styles.tableHeader}>
          <View style={styles.colDesc}><Text style={styles.thText}>Description</Text></View>
          <View style={styles.colQty}><Text style={styles.thText}>Qty</Text></View>
          <View style={styles.colRate}><Text style={styles.thText}>Rate</Text></View>
          <View style={styles.colAmount}><Text style={styles.thText}>Amount (INR)</Text></View>
        </View>
        
        {proposalData.modules?.map((mod, i) => (
          <View key={i} style={styles.tableRow}>
            <View style={styles.colDesc}>
              <Text style={styles.tdBold}>{mod.title}</Text>
              <Text style={{fontSize: 10, color: '#000000', marginTop: 3}}>{mod.description}</Text>
            </View>
            <View style={styles.colQty}><Text style={styles.tdText}>1</Text></View>
            {/* Swapped ₹ for Rs. */}
            <View style={styles.colRate}><Text style={styles.tdText}>Rs. {mod.cost.toLocaleString('en-IN')}</Text></View>
            <View style={styles.colAmount}><Text style={styles.tdBold}>Rs. {mod.cost.toLocaleString('en-IN')}</Text></View>
          </View>
        ))}

        <View style={styles.tableTotalRow}>
          <View style={styles.colDesc}><Text style={[styles.tdBold, { fontSize: 13 }]}>Total Estimated Investment</Text></View>
          <View style={styles.colQty}><Text style={styles.tdText}></Text></View>
          <View style={styles.colRate}><Text style={styles.tdText}></Text></View>
          {/* Swapped ₹ for Rs. */}
          <View style={styles.colAmount}><Text style={[styles.tdBold, { fontSize: 13 }]}>Rs. {proposalData.totalCost.toLocaleString('en-IN')}</Text></View>
        </View>
      </View>

      <DocumentFooter pageNumber="2" />
    </Page>

    {/* PAGE 3: TERMS & SIGNATURES */}
    <Page size="A4" style={styles.page}>
      <SecondaryHeader />
      
      <Text style={styles.sectionTitle}>Terms & Conditions</Text>
      
      <Text style={[styles.boldText, { fontSize: 12, marginBottom: 5 }]}>1. Payment Milestones</Text>
      {proposalData.paymentMilestones?.map((milestone, i) => (
        <Text key={i} style={styles.paragraph}>
          {/* Swapped ₹ for Rs. */}
          <Text style={styles.boldText}>{String.fromCharCode(97 + i)}. {milestone.phase} ({milestone.percentage}%): </Text> 
          Rs. {milestone.amount.toLocaleString('en-IN')} - {milestone.description}
        </Text>
      ))}

      <Text style={[styles.boldText, { fontSize: 12, marginTop: 10, marginBottom: 5 }]}>2. Operational Costs & Responsibilities</Text>
      {proposalData.operationalCosts?.map((op, i) => (
        <Text key={i} style={styles.paragraph}>
          {/* Automatically replaces the ₹ with Rs. dynamically just for the PDF */}
          <Text style={styles.boldText}>{op.title}: </Text> {op.description} ({op.cost.replace('₹', 'Rs. ')})
        </Text>
      ))}

      <Text style={[styles.boldText, { fontSize: 12, marginTop: 10, marginBottom: 5 }]}>3. Intellectual Property & Code Ownership</Text>
      <Text style={styles.paragraph}>
        All custom code, UI designs, and assets transfer fully to the client upon receipt of final payment. The prototype architecture is production-quality and designed to transition directly into future phases.
      </Text>

      {/* Main Signature Block */}
      <View style={styles.signatureSection}>
        <View style={styles.sigBox}>
          <Text style={[styles.sigName, { marginBottom: 30 }]}>Client Acceptance</Text>
          <View style={styles.sigLine}></View>
          <Text style={styles.sigName}>Mr. {proposalData.clientName}</Text>
          <Text style={styles.sigTitle}>Authorized Signatory</Text>
          <Text style={[styles.sigTitle, { marginTop: 10 }]}>Date: _________________</Text>
        </View>
        
        <View style={styles.sigBox}>
          <Text style={[styles.sigName, { marginBottom: 30 }]}>BRC HUB LLP</Text>
          <View style={styles.sigLine}></View>
          <Text style={styles.sigName}>Satish Chauhan</Text>
          <Text style={styles.sigTitle}>Chief People & Product Officer</Text>
          <Text style={[styles.sigTitle, { marginTop: 10 }]}>Date: _________________</Text>
        </View>
      </View>

      <DocumentFooter pageNumber="3" />
    </Page>
  </Document>
);