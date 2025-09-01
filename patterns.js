// Centralized Patterns for Tealium QA Logger
// This file contains all reusable regex patterns and field definitions
// to eliminate duplication across link and view specifications

window.PATTERNS = {
  // === BASIC DATA TYPES ===
  // Most frequent pattern - used 179 times
  number: /^\d+$/,
  
  // Any text including empty - 35 occurrences  
  anyText: /^.*$/,
  
  // Any non-empty text - 18 occurrences
  requiredText: /^.+$/,
  
  // Flexible text or empty - 23 occurrences
  flexText: /^(.*)$/,
  
  // === DATE & TIME FORMATS ===
  // ISO date format - 24 occurrences
  date: /^\d{4}-\d{2}-\d{2}$/,
  
  // Time format HH:MM - 25 occurrences
  time: /^\d{2}:\d{2}$/,
  
  // Date or null/undefined
  dateOptional: /^(\d{4}-\d{2}-\d{2}|null|undefined)$/,
  
  // === FINANCIAL ===
  // Currency codes - 38 occurrences
  currency: /^(GBP|EUR|USD)$/,
  
  // Price range validation - 18 occurrences
  priceRange: /^(0|[1-9][0-9]{0,3}|10000)$/,
  
  // Price with decimal places
  priceDecimal: /^\d+(\.\d{2})?$/,
  
  // Price or zero with decimal
  priceDecimalOptional: /^\d+(\.\d{1,2})?$/,
  
  // === LOCATION & TRAVEL ===
  // Station codes - 40 occurrences
  stationCode: /^\d{7}$/,
  
  // Journey type - 9 occurrences
  journeyType: /^(One way|Return)$/,
  
  // Connection type
  connectionType: /^(direct|connection|mixed)$/,
  
  // Train route
  trainRoute: /^(london route|continent route)$/,
  
  // === CUSTOMER DATA ===
  // Hashed email - 19 occurrences
  hashedEmail: /^[a-f0-9]{64}$/,
  
  // Membership ID - 16 occurrences
  membershipId: /^\d{17}|null$/,
  
  // Boolean values - 18 occurrences
  boolean: /^(true|false)$/,
  
  // Boolean with null - extended boolean
  booleanOptional: /^(true|false|null)$/,
  
  // Loyalty tiers - 17 occurrences
  loyaltyTier: /^(Classique|Carte Blanche|Avantage|Etoile|Silver|Gold|null)$/,
  
  // Business ID - 17 occurrences
  businessId: /^(null|undefined|[\w-]*)$/,
  
  // Booking type - 9 occurrences
  bookingType: /^(regular booking|points booking)$/,
  
  // Optional numeric with null
  numberOptional: /^(\d+|null)$/,
  
  // Optional numeric with null/undefined
  numberOptionalExtended: /^(\d+|null|undefined)$/,
  
  // Optional companion passenger count
  companionCount: /^(\d+|null|undefined)?$/,
  
  // === TRAIN SPECIFIC ===
  // Train classes - 10 occurrences
  trainClass: /^(Eurostar Standard|Eurostar Plus|Eurostar Premier|Standard Seconde|Standard Seconde|Standard Première|Flex Première|Standard|Wheelchair|PREMIÈRE SIGNATURE|PREMIÈRE|Standard Premier|Comfort|Business Premier|Premium|BUSINESS 1ÈRE|STANDARD 1ÈRE)$/,
  
  // Train number - 4 digits
  trainNumber: /^\d{4}$/,
  trainNumberInbound: /^\d{4}$/,
  
  // Train brands
  trainBrand: /^(ES|ER|SN|SNCB)$/,
  
  // Train ticket types
  trainTicketType: /^(ESTAR_PUB_(STD|PLUS|PREM)|SNCF1SF|RED_ESTAR_PUB_PLUS|null)$/,

  // Train tariffs - 11 characters
  trainTariff: /^[A-Z0-9]{11}$/,
  trainTariffInbound: /^([A-Z0-9]{11}|null|undefined)$/,
  
  // Extended train ticket types
  trainTicketTypeExtended: /^.*$/,
  
  // Train connection operators
  connectionOperator: /^(Eurostar|SNCF)?$/,
  connectionOperatorInbound: /^(null|Eurostar|SNCF)?$/,

  // Train connection codes
  connectionCode: /^(null|undefined|\d{7})?$/,
  
  // Train fare types
  fareType: /^(ES_ER|ER_LY|ES_LY|ER_SN|ES_SN|ER_SNCB|ES_SNCB|null)?$/,
  
  // Train fare names
  fareName: /^(through fare|summated fare|null)?$/,
  
  // Product variants
  productVariant: /^(outbound|inbound|null)$/,
  
  // Train passenger types
  passengerType: /^(adult|child|infant|null)$/,
  
  // Product status
  productStatus: /^(available|not available)$/,
  
  // Booking status for manage booking
  bookingStatus: /^(past|upcoming)$/,
  
  // Cancellation status
  cancellationStatus: /^(cancelled by customer)$/,
  
  // === HOTEL SPECIFIC ===
  // Hotel star rating
  hotelStarRating: /^\d$/,
  
  // Hotel review score
  hotelReviewScore: /^\d(.\d)?|null$/,
  
  // Hotel codes - 3 digits
  hotelCode: /^\d{3}$/,
  
  // Hotel occupancy pattern
  hotelOccupancy: /^\d\|\d\|\d\|\d\|\d$/,
  
  // Hotel room details
  hotelRoomDetails: /^Rooms\:\d|Occupancy\:\d$/,
  
  // Hotel extra options
  hotelRoomExtra: /^(room only|null)$/,
  
  // Hotel package savings
  hotelPackageSavings: /^(none|.*)$/,
  
  // === SYSTEM & NAVIGATION ===
  // Funnel names - 12 occurrences
  funnelName: /^(Login|CustomerDashboard|Trains|Hotels|Packages|Subscriptions|ManageBooking|BusinessDashboard|Snap)$/,
  
  // Language codes
  language: /^(en|de|fr|nl|be)$/,
  
  // Market codes
  market: /^(uk|fr|be|nl|us|de)$/,
  
  // Market language combinations
  marketLanguage: /^(uk-en|fr-fr|nl-nl|us-en)$/,
  
  // === BOOKING & TRANSACTION ===
  // PNR codes - 6 character booking reference
  pnr: /^[A-Z0-9]{6}$/,
  
  // Order ID patterns
  orderId: /^([0-9]{8}[a-z]{6})(\:upgrade|\:exchage)?$/,
  
  // Cancellation order ID
  orderIdCancelled: /^[A-Z0-9]{6}:cancelled$/,
  
  // Transaction dates
  transactionDate: /^[\d+]{8}$/,
    
  // Payment methods
  paymentMethods: /Card|GooglePay|Klarna_BNPL|PayPal|SavedCard/,
  
  // Payment details
  paymentDetails: /^(Card|SavedCard|ApplePay|GooglePay|iDEAL|PayPal|Sofort|Invoice|Billie|Klarna_BNPL|Card|Loyalty_Points|Card|Voucher)$/,
  
  // Payment card types
  paymentCardType: /^(mc|visa|amex|cartebancaire|jcb|diners|discover)$/,
  
  // === PROMOTION & MARKETING ===
  // Promotion position format
  promotionPosition: /\d{2}_\d{2}$/,
  
  // Club discount types
  clubDiscount: /(\d+|none|member)/,
  
  // === INTERACTION EVENTS ===
  // Event actions for booking magnet
  bookingMagnetActions: /^(Click|Edit Your Details|Change Tabs)$/,
  
  // Event labels for booking magnet
  bookingMagnetLabels: /^(Check Requirements|Edit|Edit Requirements|Edit Requirements Success|Outbound Journey|Check Return Journey|Learn More On The EES Website)$/,
  
  // Field actions
  fieldActions: /^Field (Start|Complete)$/,
  
  // Login actions
  loginActions: /^(Login|Change Tab)$/,
  
  // Expand/collapse actions
  expandCollapseActions: /^(Expand|Collapse)$/,
  
  // === MISSING PATTERNS FOR FALLBACK ===
  // Page category pattern - accepts any text
  page_category: /^.*$/,
  
  // Page name pattern - accepts any text  
  page_name: /^.*$/,
  
  // IsLoggedIn pattern - alias for boolean
  isLoggedIn: /^(true|false)$/,
  
  // BusinessID pattern - alias for businessId (note different casing)
  businessID: /^(null|undefined|[\w-]*)$/,
  
  // MembershipID pattern - alias for membershipId  
  membershipID: /^\d{17}|null$/,
  
  // Membership details pattern - accepts any text or null
  membershipDetails: /^(.+|null)$/,
  
  // Customer is admin pattern - alias for boolean
  customer_is_admin: /^(true|false)$/,
  
  // === SPECIAL PATTERNS ===
  // Conversation ID for chatbot
  conversationId: /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/,
  
  // UUID pattern (generic)
  uuid: /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/,
  
  // Sale tags pattern
  saleTag: /^(lowest fare|limited seats.*|null)?$/,
  
  // Insurance types
  insuranceType: /^(Comprehensive|Cancellation) insurance$/,
  
  // === ARRAY PATTERNS ===
  // These patterns are commonly used in arrays for product data
  // They will be referenced as [PATTERNS.arrayPattern] in specifications
  
  // Common array patterns that need to be wrapped in arrays
  arrayNumber: [/^\d+$/],
  arrayText: [/^.*$/],
  arrayRequiredText: [/^.+$/],
  arrayStationCode: [/^\d{7}$/],
  arrayTrainNumber: [/^\d{4}$/],
  arrayDate: [/^\d{4}-\d{2}-\d{2}$/],
  arrayTime: [/^\d{2}:\d{2}$/],
  arrayTrainClass: [/^Eurostar (Standard|Plus|Premier)$/],
  arrayProductVariant: [/^(outbound|inbound)$/],
  arrayPriceDecimal: [/^\d+(\.\d{2})?$/]
};

// Utility function to resolve pattern references in specifications
window.resolvePatterns = function(spec) {
  const resolved = {};
  
  for (const [key, value] of Object.entries(spec)) {
    if (typeof value === 'string' && value.startsWith('@PATTERNS.')) {
      // Handle pattern reference like @PATTERNS.currency
      const patternName = value.substring(10); // Remove '@PATTERNS.'
      resolved[key] = window.PATTERNS[patternName];
    } else if (Array.isArray(value) && value.length === 1 && typeof value[0] === 'string' && value[0].startsWith('@PATTERNS.')) {
      // Handle array pattern reference like [@PATTERNS.currency]
      const patternName = value[0].substring(10); // Remove '@PATTERNS.'
      resolved[key] = [window.PATTERNS[patternName]];
    } else {
      // Keep original value
      resolved[key] = value;
    }
  }
  
  return resolved;
};

// Function to resolve all specifications in an array
window.resolveSpecificationArray = function(specs) {
  return specs.map(spec => window.resolvePatterns(spec));
};
