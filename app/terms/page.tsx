import type { Metadata } from "next";
import LegalPage, {
  LegalInlineLink,
  type LegalSection,
} from "@/components/pages/LegalPage";
import { company } from "@/lib/content";
import { sourceLinks } from "@/lib/source-content";

export const metadata: Metadata = {
  title: "Terms & conditions",
  description:
    "Sunflower Medical Limited Standard Terms and Conditions for commercial orders and the sale of goods.",
  alternates: { canonical: "/terms" },
};

const sections: readonly LegalSection[] = [
  {
    id: "important-notice",
    title: "Important notice and definitions",
    number: "00",
    showInNav: false,
    paragraphs: [
      "This is an important document which should be read before any contract for the sale of goods is entered into. Attention is specifically drawn to clause 6, which contains limits on and exclusions to the liability of the Company to its Customers.",
      "In these Conditions, the following words have the meanings set out below.",
      "This web-readable presentation follows the published Standard Terms and Conditions Rev.2. If there is any difference between this page and the source PDF, the source PDF takes precedence.",
    ],
    clauses: [
      {
        number: "Company",
        text: "Sunflower Medical Limited (company number 04514281).",
      },
      { number: "Customer", text: "The purchasing entity." },
      { number: "Conditions", text: "These Terms and Conditions." },
      {
        number: "Goods",
        text: "Any and all goods, products or services supplied by the Company to the Customer in accordance with an Order in any format.",
      },
      { number: "Order", text: "As defined in condition 2.1." },
      { number: "Price", text: "As defined in condition 3.1." },
    ],
    action: {
      label: "Standard Terms and Conditions Rev.2",
      href: sourceLinks.terms,
      note: "Download the source PDF. The numbered clauses below are formatted for accessible web reading.",
      external: true,
    },
  },
  {
    id: "conditions-applicable",
    title: "Conditions Applicable",
    number: "01",
    clauses: [
      {
        number: "1.1",
        text: "The Conditions shall apply to all commercial dealings between the Company and the Customer and all quotations given, orders accepted and contracts made for the sale of Goods by the Company to the Customer, to the exclusion of all other terms and conditions, including any terms or conditions which the Customer may purport to apply under any purchase order, confirmation of order or similar document.",
      },
      {
        number: "1.2",
        text: "All orders for Goods shall be deemed to be an offer by the Customer to purchase those Goods pursuant to these Conditions.",
      },
      {
        number: "1.3",
        text: "Continuing instructions from the Customer to the Company, confirmation of any specifications for the Goods and/or acceptance of delivery, or the transmission of the Goods, shall be deemed conclusive evidence of the Customer’s acceptance of these Conditions.",
      },
      {
        number: "1.4",
        text: "Any variation to these Conditions, including any special terms and conditions agreed between the parties, shall be inapplicable unless agreed in advance in writing by a director of the Company.",
      },
      {
        number: "1.5",
        text: "The Conditions comprise the entire agreement between the Company and the Customer and the Company’s liability under any warranties contained in the Conditions, or otherwise implied by law, shall not be affected by any statements made to the Customer unless the same has been reduced to writing and agreed with the Customer.",
      },
      {
        number: "1.6",
        text: "The Customer waives any right it might otherwise have to rely on any term endorsed upon, delivered with or contained in any documents of the Customer that is inconsistent with these Conditions.",
      },
    ],
  },
  {
    id: "orders-and-approval",
    title: "Orders and Approval",
    number: "02",
    clauses: [
      {
        number: "2.1",
        text: "An Order is any request or instruction by the Customer for the Company to supply Goods.",
      },
      {
        number: "2.2",
        text: "The Customer is wholly responsible for providing the correct specifications for the Order and for highlighting any specific purpose or any critical deadlines to be met. The Company shall not be liable for any loss whatsoever resulting from inaccurate, defective or inadequate instructions from the Customer.",
      },
      {
        number: "2.3",
        text: "All Orders shall be recorded in writing. Following receipt of an Order, the Company will confirm acceptance in writing, and not in any other way, and will thereafter commence any work as is necessary in the Company’s absolute discretion in the circumstances. The Company’s written acceptance will bring into effect a contract between the Company and the Customer. Any resulting amendments are to be recorded in writing.",
      },
      {
        number: "2.4",
        text: "In all respects the Customer shall determine the suitability of the Goods for the Customer’s intended purpose and all Goods supplied by the Company to the Customer in accordance with an Order shall be deemed to meet the Customer’s particular requirements.",
      },
      {
        number: "2.5",
        text: "If the Customer or anyone acting on behalf of the Customer alters or amends the Order, as specified in clause 2.3, in any way then the Company may adjust its quoted Price accordingly.",
      },
      {
        number: "2.6",
        text: "The Customer undertakes to notify the Company without delay of any circumstances which may materially affect a contract, such as changes to the Order or delay, and costs or expenses arising from such circumstances shall be payable by the Customer.",
      },
      {
        number: "2.7",
        text: "Any quotation given by the Company shall be confirmed as acceptable by the Customer during the period of 30 days from its date and may be withdrawn by the Company at any time prior to such confirmation by giving written or oral notice to the Customer of its intention to withdraw the same.",
      },
      {
        number: "2.8",
        text: "Cancellation or returns by the Customer will only be agreed by the Company on the condition that the Customer shall pay a cancellation charge of 35% of the price payable, plus a collection charge deemed to be at cost, under the Order so cancelled. Custom and bespoke products are made to individual specifications and therefore cannot be returned unless they are defective as described in clauses 6.3 and 6.5.",
      },
      {
        number: "2.9",
        text: "The Company and the Customer acknowledge and agree that any amount claimed by the Company pursuant to clause 2.8 is a reasonable pre-estimate of the Company’s genuine loss in respect of any cancellation, including loss of profit, and is not a penalty.",
      },
      {
        number: "2.10",
        text: "The Company may sub-contract the supply of Goods at its sole discretion.",
      },
    ],
  },
  {
    id: "price-and-payment",
    title: "Price and Payment",
    number: "03",
    clauses: [
      {
        number: "3.1",
        text: "Unless otherwise agreed, the price shall be the Company’s quoted price plus any of the additions described in conditions 3.1(a) to 3.1(d). Any such costs, expenses or sums shall be added to the price quoted, together referred to as the Price, and the adjusted amount shall be invoiced to the Customer.",
      },
      {
        number: "3.1(a)",
        text: "Any additional costs, expenses or sums payable by the Company resulting from variations to the Order requested by the Customer after the quotation was given.",
      },
      {
        number: "3.1(b)",
        text: "Any additional costs, expenses or sums incurred as a result of delay caused by the Customer for whatever reason.",
      },
      {
        number: "3.1(c)",
        text: "Any fluctuations caused by, but not restricted to, increases in costs incurred by the Company as a consequence of any increase in the cost of raw materials, manufacture, packaging, transport or other direct or indirect costs.",
      },
      {
        number: "3.1(d)",
        text: "Any costs of carriage of the Goods and/or related insurance expense and/or any and all necessary import or export licences, clearances and other consents.",
      },
      {
        number: "3.2",
        text: "The Price is exclusive of value added tax or other applicable sales tax which shall be due at the rate ruling on the date of the Company’s invoice and shall be added to the Price together with any other statutory tax.",
      },
      {
        number: "3.3",
        text: "Payment of the Price and value added tax shall be due within 30 days of the date of the Company’s invoice and shall be made by the Customer without any deduction, set off or counterclaim whatsoever. Time for payment shall be of the essence. If the Customer defaults on payment when payment is due and payable, the Company shall have the right to cancel any and all contracts between the Company and the Customer and to suspend all further deliveries of Goods until the default is made good.",
      },
      {
        number: "3.4",
        text: "Without prejudice to any other right or remedy available to the Company, interest on overdue invoices shall accrue daily from the date payment becomes due at the annual rate of 8% plus the Bank of England base rate prevailing at that time, in accordance with the Late Payment of Commercial Debts (Interest) Act 1998. Interest shall continue to accrue after as well as before any judgment. The Company may claim compensation for debt recovery costs under that Act where necessary.",
      },
      {
        number: "3.5",
        text: "If requested by the Company, the Customer shall pay the Price prior to delivery of the Goods and, in such circumstances, the Company shall not be required to deliver the Goods until the Price has been paid in cleared funds.",
      },
      {
        number: "3.6",
        text: "No dispute arising under any contract between the Company and the Customer shall interfere with the Customer’s obligation to make prompt payment in full for all Goods sold and delivered by the Company, or supplied to the Customer’s Order.",
      },
    ],
  },
  {
    id: "delivery",
    title: "Delivery",
    number: "04",
    clauses: [
      {
        number: "4.1",
        text: "Delivery takes place when the Goods are collected by the Customer from the Company’s premises unless otherwise agreed in writing. If, at its sole discretion, the Company agrees to deliver the Goods to a location specified by the Customer, this will be detailed separately in writing and the Company shall confirm any variation to these Conditions as a result. In all cases, the Customer is responsible for all costs associated with the collection or delivery of Goods.",
      },
      {
        number: "4.2",
        text: "The Company will at the Customer’s request use reasonable endeavours to arrange for carriage of the Goods to the Customer’s address or another properly notified address. The costs of carriage and any insurance shall be as notified by the Company from time to time and shall be paid by the Customer in addition to the Price, without any deduction, set off, counterclaim or other withholding, and shall be due on the date for payment of the Price. The carrier shall be deemed to be the Customer’s agent.",
      },
      {
        number: "4.3",
        text: "Any time for delivery given by the Company, its servants or agents shall be an estimate only. Although the Company shall endeavour to deliver within the period stated, time is not of the essence and the Company shall not be liable for loss, costs, damage or expense caused directly or indirectly by failure to comply with any delivery time stated. The Customer shall have no right to cancel any Order or refuse to accept delivery for that reason.",
      },
      {
        number: "4.4",
        text: "The Company may deliver the Goods by separate instalments and each instalment shall constitute a separate contract governed by these Conditions. Failure to deliver any one or more instalments on the due dates, or any defect in any instalment, shall not entitle the Customer to treat this contract as repudiated or cancel any other instalment.",
      },
      {
        number: "4.5",
        text: "The Company shall not be liable for any loss or damage whatever due to failure by the Company to deliver the Goods, or any of them, promptly or at all.",
      },
      {
        number: "4.6",
        text: "Notwithstanding that the Company may have delayed or failed to deliver the Goods, the Customer shall be bound to accept delivery and pay for the Goods in full. If the Customer fails to accept delivery or give adequate delivery instructions, the Company may exercise the rights in conditions 4.6(a) and 4.6(b), in addition to any other rights or remedies.",
      },
      {
        number: "4.6(a)",
        text: "Store the Goods until actual delivery and charge the Customer for all reasonable costs, including insurance, of storage.",
      },
      {
        number: "4.6(b)",
        text: "Sell the Goods at the best price readily obtainable and, after deducting all reasonable storage and selling expenses, account to the Customer for any excess over the Price or charge the Customer for any shortfall below the Price.",
      },
    ],
  },
  {
    id: "property-pending-payment",
    title: "Property in Goods Pending Payment",
    number: "05",
    clauses: [
      {
        number: "5.1",
        text: "Notwithstanding delivery having taken place, title to the Goods shall not pass from the Company until the conditions in 5.1(a) and 5.1(b) have been met.",
      },
      {
        number: "5.1(a)",
        text: "The Customer shall have paid the Price plus value added tax in full.",
      },
      {
        number: "5.1(b)",
        text: "No other sums whatever shall be due from the Customer to the Company.",
      },
      {
        number: "5.2",
        text: "Until property in the Goods passes to the Customer, the Customer shall hold the Goods and each of them on a fiduciary basis as bailee for the Company. The Customer shall store the Goods, at no cost to the Company, separately from all other goods in its possession and mark them so that they are clearly identified as the Company’s property.",
      },
      {
        number: "5.3",
        text: "Notwithstanding that the Goods remain the property of the Company, the Customer may sell or use them in the ordinary course of the Customer’s business at full market value for the account of the Company. Any such dealing shall be by the Customer as principal. Until property passes, the entire proceeds of sale or otherwise of the Goods shall be held in trust for the Company, shall not be mixed with other money or paid into any overdrawn bank account, and shall at all material times be identified as the Company’s money.",
      },
      {
        number: "5.4",
        text: "The Company shall be entitled to recover the Price plus value added tax notwithstanding that property in any of the Goods has not passed from the Company.",
      },
      {
        number: "5.5",
        text: "Until property passes from the Company, the Customer shall upon request deliver up such Goods as have not ceased to exist or been re-sold. If the Customer fails to do so, the Company may enter any premises owned, occupied or controlled by the Customer where the Goods are situated and repossess them. On the making of such request the rights of the Customer under clause 5.3 shall cease.",
      },
      {
        number: "5.6",
        text: "The Customer shall not pledge or charge by way of security for any indebtedness any Goods which are the property of the Company. If the Customer does so, all sums owing by the Customer to the Company shall immediately become due and payable, without prejudice to the Company’s other rights.",
      },
      {
        number: "5.7",
        text: "The Customer shall insure and keep insured the Goods to the full price against all risks, to the reasonable satisfaction of the Company, from delivery until title passes, and shall produce a copy of the insurance policy whenever requested. If the Customer fails to do so, all sums owing by the Customer to the Company shall immediately become due and payable, without prejudice to the Company’s other rights.",
      },
      {
        number: "5.8",
        text: "Risk in the Goods shall pass to the Customer on delivery or, if earlier, when the Company notifies the Customer that the Goods are available for collection at its premises.",
      },
    ],
  },
  {
    id: "interpretation-and-liability",
    title: "Interpretation and Liability",
    number: "06",
    clauses: [
      {
        number: "6.1",
        text: "The Goods shall be supplied in accordance with the description and specification agreed by the Company.",
      },
      {
        number: "6.1(a)",
        text: "The Company warranty relates to any manufacturing defect or assembly of materials for the time specified, provided that the product is used, where applicable, to the set standards, such as CE marking and maximum working loads. Product misuse, overloading, damage and abuse are excluded.",
      },
      {
        number: "6.2",
        text: "The Company may from time to time make changes in the specification of the Goods which are required to comply with applicable safety or statutory requirements, or which do not materially affect the quality or fitness for purpose of the Goods.",
      },
      {
        number: "6.3",
        text: "The Customer shall inspect the Goods on delivery or collection and comply with the notification requirements in conditions 6.3(a) and 6.3(b). If the Customer fails to comply, the Goods shall be conclusively presumed to be in accordance with the contract and free from any defect or damage apparent on reasonable examination, and the Customer shall be deemed to have accepted the Goods.",
      },
      {
        number: "6.3(a)",
        text: "Within 7 days of delivery, notify the Company in writing of any alleged damage caused by any person other than the Customer, its agents, employees or representatives.",
      },
      {
        number: "6.3(b)",
        text: "Within 7 days of delivery, notify the Company in writing of any alleged defect, shortage in quantity or failure to comply with description, and comply with condition 6.5.",
      },
      {
        number: "6.4",
        text: "The Customer shall notify the Company of any non-delivery within 7 days of the date of despatch, as stated on the invoice or notification that the Goods have been delivered, whichever is earlier. Notwithstanding receipt of such notice, a clear signature on a carrier’s delivery advice sheet shall be deemed to signify receipt of the quantity indicated on that sheet.",
      },
      {
        number: "6.5",
        text: "If the Customer alleges that any Goods are defective pursuant to condition 6.3, those Goods are referred to as the Returned Goods and the requirements in conditions 6.5(a) to 6.5(c) apply.",
      },
      {
        number: "6.5(a)",
        text: "The Customer must give the Company the opportunity to examine the Returned Goods and investigate any complaint made.",
      },
      {
        number: "6.5(b)",
        text: "The Returned Goods must be unused and in their original packaging.",
      },
      {
        number: "6.5(c)",
        text: "The Returned Goods must be available for collection and photographing by a representative of the Company.",
      },
      {
        number: "6.6",
        text: "If the Customer complies with condition 6.5 and the Company agrees that the Returned Goods are defective, the Company will at its sole discretion repair or replace them with a satisfactory alternative or substitute, or refund their cost. The Customer shall accept repaired, alternative or substitute Goods. The Company shall not be responsible for delay, damage, detriment or expense arising between initial delivery and repair or replacement, and its liability shall not exceed the cost of replacement or the price paid. The Company may charge a restocking and collection fee in an amount notified from time to time.",
      },
      {
        number: "6.7",
        text: "If the Customer fails to comply with condition 6.5 and/or the Company decides that Returned Goods are not defective, the Customer shall indemnify the Company against all loss suffered as a result.",
      },
      {
        number: "6.8",
        text: "The Company shall be under no liability whatever to the Customer for any indirect loss and/or expense, including loss of profit, howsoever arising out of a breach by the Company of this contract.",
      },
      {
        number: "6.9",
        text: "In the event of a breach of any contract by the Company, the Customer’s remedies shall be limited to damages. Subject to condition 6.10, the Company’s liability shall under no circumstances exceed the Price of the Goods.",
      },
      {
        number: "6.10",
        text: "All warranties and conditions, whether implied by statute or otherwise, are excluded from this contract, provided that nothing in this contract shall restrict or exclude liability for death or personal injury caused by the negligence of the Company or affect the statutory rights of a Customer dealing as a consumer.",
      },
      {
        number: "6.11",
        text: "The Company shall not be liable for loss, damage, cost, detriment or expense arising if manufacture or delivery is delayed or hindered by act of God, governmental intervention or restriction, hostilities, civil commotion, fire, flood, accident, machinery breakdown, strike, lockout, non-delivery by suppliers or any other cause beyond the Company’s reasonable control. On the occurrence of such an event, the Company may cancel this agreement or suspend delivery.",
      },
      {
        number: "6.12",
        text: "Complaints made by the Customer shall not be grounds to delay payment of monies due to the Company and shall not give rise to any right of set off.",
      },
      {
        number: "6.13",
        text: "Subject to condition 6.10, the Company shall not be liable to the Customer by reason of any representation, unless fraudulent, or any implied warranty, condition or other term, duty at common law, express term of these Conditions or other contract term for any consequential loss or damage, including loss of profit, costs, expenses or other claims for consequential compensation arising out of or in connection with the supply, resale or use of the Goods, whether caused by the Company’s negligence or that of its employees or agents or otherwise.",
      },
      {
        number: "6.14",
        text: "Choosing not to include assembly in an Order for applicable products transfers all assembly risks to the Customer. The Company guarantees defect-free delivery but takes no responsibility for post-delivery issues caused by incorrect assembly.",
      },
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    number: "07",
    clauses: [
      {
        number: "7.1",
        text: "Intellectual Property means all industrial and intellectual property rights including, without limitation, patents, trade marks and/or service marks, whether registered or unregistered, registered and unregistered designs, copyrights and applications for any of the foregoing in any part of the world, copyright in all drawings, specifications, designs and computer software, all know-how, and confidential information owned and used by the parties.",
      },
      {
        number: "7.2",
        text: "Subject to condition 7.4, the components contained in and the specifications and designs of the Goods, including the Intellectual Property in them, shall as between the parties be the property of the Company.",
      },
      {
        number: "7.3",
        text: "Where designs or specifications have been supplied by the Customer for manufacture by or to the order of the Company, the Customer warrants that their use for manufacture, processing, assembly or supply of the Goods shall not infringe the rights of any third party.",
      },
      {
        number: "7.4",
        text: "Where specifications and designs of the Goods have been provided by the Customer, the Intellectual Property in them shall remain the Customer’s property. Notwithstanding this, the Intellectual Property in components created by or incorporated within the Goods shall at all times be the Company’s property.",
      },
      {
        number: "7.5",
        text: "No right or licence is granted under this contract to the Customer under any Intellectual Property right except the right to use or re-sell the Goods.",
      },
      {
        number: "7.6",
        text: "All Goods sold in retail packaging may be resold only in the packaging supplied by the Company and no trade mark other than those applied by the Company may be marked on or applied in relation to the Goods.",
      },
      {
        number: "7.7",
        text: "The Customer undertakes to respect and keep confidential all confidential information, whether relating to Intellectual Property rights or otherwise, supplied to it during as well as after each contract with the Company.",
      },
    ],
  },
  {
    id: "assignment",
    title: "Assignment",
    number: "08",
    clauses: [
      {
        number: "8",
        text: "The Customer may not, without the Company’s written consent, assign all or any part of its rights and obligations under this contract, but the Company may licence or subcontract all or any part of its rights and obligations without the Customer’s consent.",
      },
    ],
  },
  {
    id: "breach-and-insolvency",
    title: "Breach of Contract and Insolvency",
    number: "09",
    clauses: [
      {
        number: "9.1",
        text: "If the Customer fails to pay for the Goods in accordance with these Conditions, commits any other breach, suffers distress or execution against its goods, offers an arrangement with creditors, is subject to a bankruptcy or winding-up petition, is unable to pay its debts as they fall due, has a receiver, administrative receiver, manager or administrator appointed over any part of its business or assets, or suffers analogous foreign proceedings, all sums outstanding for the Goods shall become immediately payable. The Company may, without prejudice to its other rights, exercise the rights in 9.1(a) and 9.1(b).",
      },
      {
        number: "9.1(a)",
        text: "Suspend all future deliveries of Goods to the Customer and/or terminate the contract without liability on the Company’s part.",
      },
      {
        number: "9.1(b)",
        text: "Exercise any of its rights pursuant to condition 3 and/or condition 5 of these Conditions.",
      },
    ],
  },
  {
    id: "cancellation",
    title: "Cancellation",
    number: "10",
    clauses: [
      {
        number: "10",
        text: "The Company may cancel this contract at any time before the Goods are delivered by giving written notice. On giving such notice, the Company shall promptly repay to the Customer any sums paid in respect of the Price. The Company shall not be liable for any further loss or damage arising from such cancellation.",
      },
    ],
  },
  {
    id: "termination",
    title: "Termination",
    number: "11",
    clauses: [
      {
        number: "11.1",
        text: "If this agreement is terminated for any reason, then in addition to any other rights and remedies the Company shall be entitled to charge for all work undertaken to that date and any costs and expenses incurred, and all such sums shall be payable immediately.",
      },
      {
        number: "11.2",
        text: "Termination of the contract, however arising, shall not affect any rights and remedies accrued as at termination, including the right to claim damages for any breach which existed at or before termination.",
      },
      {
        number: "11.3",
        text: "Any provision of these Conditions that expressly or by implication is intended to come into or continue in force on or after termination shall remain in full force and effect.",
      },
    ],
  },
  {
    id: "third-party-rights",
    title: "Third Party Rights",
    number: "12",
    clauses: [
      {
        number: "12",
        text: "For the purposes of the Contracts (Rights of Third Parties) Act 1999, this agreement is not intended to and does not give any person who is not a party to it any right to enforce any of its provisions.",
      },
    ],
  },
  {
    id: "export-terms",
    title: "Export Terms",
    number: "13",
    clauses: [
      {
        number: "13.1",
        text: "Incoterms means the international rules for the interpretation of trade terms of the International Chamber of Commerce in force when the contract is made. Unless the context requires otherwise, any expression defined or given a particular meaning by Incoterms has the same meaning in these Conditions, but if there is a conflict these Conditions shall prevail.",
      },
      {
        number: "13.2",
        text: "Where the Goods are supplied for export from the United Kingdom, this clause 13 shall, subject to any special terms in writing between the Company and the Customer, apply notwithstanding any other provision of these Conditions.",
      },
      {
        number: "13.3",
        text: "The Customer shall be responsible for complying with legislation or regulations governing importation of the Goods into the destination country, including obtaining all necessary import or export licences, clearances and other consents and paying any duties on the Goods.",
      },
      {
        number: "13.4",
        text: "Unless otherwise agreed in writing, the Goods shall be delivered ex works and from that point shall be at the Customer’s risk. The Company shall be under no obligation to give notice under section 32(3) of the Sale of Goods Act 1979.",
      },
      {
        number: "13.5",
        text: "The Company shall have no liability for any claim in respect of damage to the Goods during transit.",
      },
      {
        number: "13.6",
        text: "The Customer shall pay for the Goods by bank transfer or other cleared funds in advance of shipment if requested. The Company may withhold delivery, reject the Order or terminate the contract if advance payments are not made. The Customer will indemnify the Company against all losses, storage charges, insurance and other costs or damages arising from delay or cancellation of delivery in such circumstances.",
      },
    ],
  },
  {
    id: "general",
    title: "General",
    number: "14",
    clauses: [
      {
        number: "14.1",
        text: "If any term or provision of this agreement is found to be unenforceable for any reason, this agreement shall be construed as if that term or provision were specifically excluded.",
      },
      {
        number: "14.2",
        text: "The waiver by the Company of any breach of these Conditions shall not prevent subsequent enforcement of that term and shall not be deemed a waiver of a subsequent breach.",
      },
      {
        number: "14.3",
        text: "This agreement shall be governed by and construed in accordance with English law and the Company and Customer shall submit all matters or disputes arising out of it to the exclusive jurisdiction of the courts of law of England.",
      },
      {
        number: "14.4",
        text: "Unless the context otherwise requires, the singular includes the plural and vice versa, references to persons include firms, companies or corporations and vice versa, and references in one gender include other genders.",
      },
      {
        number: "14.5",
        text: "The clause headings do not form part of this agreement and shall not be taken into account in its construction or interpretation.",
      },
      {
        number: "14.6",
        text: "Where the Customer is two or more persons, the liability of those persons shall be joint and several.",
      },
      {
        number: "14.7",
        text: (
          <>
            The Company processes and uses personal data in line with its{" "}
            <LegalInlineLink href="/privacy">Privacy &amp; cookies policy</LegalInlineLink>. To opt
            out, email{" "}
            <LegalInlineLink href="mailto:data@sunflowermedical.co.uk">
              data@sunflowermedical.co.uk
            </LegalInlineLink>
            .
          </>
        ),
      },
      {
        number: "14.8",
        text: "The Company accepts no liability for omissions or errors contained within its promotional literature, website or correspondence.",
      },
      {
        number: "14.9",
        text: "The Company reserves the right to modify specifications, introduce or discontinue Goods without prior notification as part of its ongoing development.",
      },
    ],
  },
  {
    id: "warranty",
    title: "Warranty",
    number: "15",
    clauses: [
      {
        number: "15.1",
        text: "The Company warrants to supply the Goods pursuant to condition 6.1. If a fault occurs, referenced to but not limited to condition 6.1(a), the Company will rectify defective workmanship or supply and fit replacement or alternative parts at no charge from delivery for up to five years. The following components and products have a 12-month warranty: battery packs, gas struts, castors, drawer runners, handwheels, upholstery, actuator systems, locks and keys, disposable curtains and screens, IV poles, bins, sack holders, Seat1, Seat2, Seat3, Seat4, Seat5, Seat32 and Seat33.",
      },
      {
        number: "15.2",
        text: "For variable-height, fully-welded couch frames, the warranty period is extended to a maximum of fifteen years, applicable solely to the frame.",
      },
      {
        number: "15.3",
        text: "For non-mainland UK and Highlands Customers, including Islands, Northern and Southern Ireland, or the rest of the world, warranties are limited to the supply of replacement or alternative parts by the Company. All other Goods or services may be chargeable.",
      },
      {
        number: "15.4",
        text: "All warranties are limited to the original Customer and may not be assigned to third parties.",
      },
      {
        number: "15.5",
        text: "Any replacement or alternative parts or services provided under warranty do not extend the original cover period.",
      },
      {
        number: "15.6",
        text: "All warranty claims are handled at the sole discretion of the Company and do not cover general wear and tear, accidental, wilful or neglectful damage, or Goods that have been improperly altered, subjected to misuse or repaired without authorisation by the Customer.",
      },
      {
        number: "15.7",
        text: "The Company does not accept liability for loss of earnings incurred by the Customer or third parties in the event of warranty claims.",
      },
      {
        number: "15.8",
        text: "The Company reserves the right to request photographic evidence as part of a warranty claim.",
      },
      {
        number: "15.9",
        text: "Where delivery damage has occurred or it is suspected that the product has been tampered with, the Customer should retain the complete packaging and notify the Company and carriers. Claims cannot be considered unless conditions 6.3 and 6.5 are strictly followed, including timely notification and adequate documentation of the issue.",
      },
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Commercial"
      title="Terms & conditions"
      intro="The Standard Terms and Conditions that apply to Sunflower Medical commercial dealings, quotations, orders and contracts for the sale of goods."
      updated="1 April 2025"
      dateLabel="Effective from"
      sections={sections}
      contactLabel={company.email}
      contactHref={`mailto:${company.email}`}
    />
  );
}
