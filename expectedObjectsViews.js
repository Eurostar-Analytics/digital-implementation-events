// expectedObjectsViews.js
window.expectedTealiumViewObjects = [
  {
    event: "TealiumView",
    currency: /^[A-Z]{3}$/, // e.g., GBP, EUR
    funnel_name: "Trains",
    page_category: /^SearchResults$/, // strict category
    isLoggedIn: /^(true|false)$/,
    customer_hashedemail: /^[a-f0-9]{64}$/,
    membershipID: /^\d{17}$/,
    loyaltyTier: /^(Classique|Carte Blanche|Etoile|Silver|Gold|null)$/,
    pointsToSpend: /^\d+$/,
    pointsToUpgrade: /^\d+|null$/,
    customer_is_admin: /^(true|false|null)$/,
    businessID: /^(null|[\w-]*)$/,
    subscriptionDuration: /^(null|\d+)$/,
    subscriptionRemainingDuration: /^(null|\d+)$/,
    pointsOrRegular: /^(regular booking|points booking)$/,
    numberOfResults: /^\d+$/,
    numberOfTrainsAvailable: /^\d+$/,
    sOutboundLowestFare: /^\d+$/,
    sInboundLowestFare: /^(\d+|null)$/,
    numberOfSalesTagsAvailable: /^\d+$/,
    directOrConnection: /^(direct|connection|mixed)$/,
    sJourneyType: /^(One way|Return)$/,
    sFromCode: /^\d{7}$/,
    sFromName: /^.+$/,
    sToCode: /^\d{7}$/,
    sToName: /^.+$/,
    sDateOutbound: /^\d{4}-\d{2}-\d{2}$/,
    sDateInbound: /^(\d{4}-\d{2}-\d{2}|null)$/,
    sTravelDuration: /^(\d+|null)$/,
    sTravelHorizon: /^\d+$/,
    sPaxAdult: /^\d+$/,
    sPaxChildren: /^\d+$/,
    sPaxYouth: /^\d+$/,
    sPaxInfants: /^\d+$/,
    sPaxSenior: /^\d+$/,
    sPaxTotal: /^\d+$/,
    basket_value: /^\d+$/,
    basket_value_inpoints: /^\d+$/,
    ecommerce_action: "product impressions",
    products_count: /^\d+$/,
    product_name: [/^\d{7} - \d{7}(:adult)?$/], // as array
    product_id: [/^\d{7} - \d{7}$/],
    product_quantity: [/^\d+$/],
    product_status: [/^(available|not available)$/],
    product_price: [/^\d+\.\d{2}$/],
    product_price_inpoints: [/^\d+$/],
    product_brand: [/^[A-Z]{2}$/], // e.g., ES, ER
    product_category: ["trains"],
    product_variant: [/^(outbound|inbound)$/],
    product_departure_date: [/^\d{4}-\d{2}-\d{2}$/],
    product_return_date: [/^(\d{4}-\d{2}-\d{2})?$/],
    product_train_class: [/^Eurostar (Standard|Plus|Premier)$/],
    product_train_route: [/^(london route|continent route)$/],
    product_train_origin_stationcode: [/^\d{7}$/],
    product_train_destination_stationcode: [/^\d{7}$/],
    product_train_number: [/^\d{4}$/],
    product_train_fbccode: [/^.*$/], // some may be null
    product_train_departuretime: [/^\d{2}:\d{2}$/],
    product_train_arrivaltime: [/^\d{2}:\d{2}$/],
    product_train_numberofconnections: [/^\d+$/],
    product_train_connectionoperator: [/^(null|Eurostar|SNCF)?$/],
    product_train_tickettype: [/^(ESTAR_PUB_(STD|PLUS|PREM)|SNCF1SF|RED_ESTAR_PUB_PLUS|null)$/],
    product_train_passenger_type: [/^(adult|null)$/],
    product_train_sale_tag: [/^(lowest fare|limited seats.*|null)?$/],
    product_travel_date: [/^\d{4}-\d{2}-\d{2}$/],
    product_train_fare_name: [/^(through fare|null)?$/],
    product_train_fare_type: [/^(ES_ER|ER_SN|null)?$/],
    product_total_journey_length: [/^\d+$/],
    product_train_journey_length: [/^\d+$/],
    page_name: /^SearchResults(\/Inbound)?$/
  },
  {
	app_platform: "ReactJS",
	app_name: "TravelExtras",
	market: "uk",
	language: "en",
	currency: /^(GBP|EUR|USD)$/,
	event: "TealiumView",
	sFromCode: /^\d{7}$/,
	sFromName: /^.+$/,
	sToCode: /^\d{7}$/,
	sToName: /^.+$/,
	sJourneyType: /^(One way|Return)$/,
	directOrConnection: /^(direct|connection|mixed)$/,
	specialBooking: "",
	sDateOutbound: /^\d{4}-\d{2}-\d{2}$/,
	sTravelHorizon: /^\d+$/,
	sPaxTotal: /^\d+$/,
	sPaxSenior: /^\d+$/,
	sPaxAdult: /^\d+$/,
	sPaxYouth: /^\d+$/,
	sPaxChildren: /^\d+$/,
	sPaxInfants: /^\d+$/,
	sPaxCompanion: /^\d+$/,
	pointsOrRegular:/^(regular booking|points booking)$/,
	basket_value: /^\d+$/,
	basket_value_inpoints: /^\d+$/,
	sTrainNumberOutbound: /^\d{4}$/,
	sOutboundTime: /^\d{2}:\d{2}$/,
	sClassOutbound: /^(Eurostar Standard|Eurostar Plus|Eurostar Premier)$/,
	sTrainTarriffOutbound: /^[A-Z0-9]{11}$/,
	funnel_name: "Trains",
	page_name: "TravelExtras"
},
	{
	event: "TealiumView",
	page_category: "Overview",
	isLoggedIn: "true",
	customer_hashedemail: /^[a-f0-9]{64}$/,
	customer_is_admin: "false",
	businessID: /^(null|[\w-]*)$/,
	loyaltyTier: /^(Classique|Carte Blanche|Etoile|Silver|Gold|null)$/,
	membershipID: /^\d{17}$/,
	membershipDetails: /^(.*)$/,
	pointsToSpend: /^\d+$/,
    	pointsToUpgrade: /^\d+|null$/,
	mktOptions: "false",
	page_name: "Overview"
},
	{
	currency: /^(GBP|EUR|USD)$/, 
	funnel_name: /^(Trains|Packages|Hotels)$/, 
	page_category: "Login",
	ld_version: "design-system",
	event: "TealiumView",
	isLoggedIn: "false",
	page_name: "Login"
},
{
  event: "TealiumView",
  funnel_name: "ManageBooking",
  page_category: "Dashboard",
  ecommerce_action: "view booking",
  currency: /^(GBP|EUR|USD)$/, 
  isLoggedIn: /^(true|false)$/,
  customer_hashedemail: /^[a-f0-9]{64}$/,
  customer_is_admin: /^(true|false|null)$/,
  businessID: /^(null|[\w-]*)$/,
  loyaltyTier: /^(Classique|Carte Blanche|Etoile|Silver|Gold|null)$/,
  membershipID: /^\d{17}$/,
  membershipDetails: /^Points: \d+; Points to upgrade: \d+$/,
  pointsToSpend: /^\d+$/,
  pointsToUpgrade: /^\d+|null$/,
  mktOptions: /^(true|false)$/,
  order_id: /^[A-Z0-9]{14}$/, 
  pnr: /^[A-Z0-9]{6}$/, 
  pointsOrRegular: /^(regular booking|points booking)$/,
  purchase_hashedemail: /^[a-f0-9]{64}$/,
  transactionType: /^train booking$/,
  transactionCancelDate: /^(undefined|null|[\d-]{10})$/,
  passengerInformation: /^(true|false)$/,
  sFromCode: /^\d{7}$/,
  sFromName: /^.+$/,
  sToCode: /^\d{7}$/,
  sToName: /^.+$/,
  sJourneyType: /^(One way|Return)$/,
  directOrConnection: /^(direct|connection|mixed)$/,
  sDateOutbound: /^\d{4}-\d{2}-\d{2}$/,
  sDateInbound: /^(\d{4}-\d{2}-\d{2}|null)$/,
  sTravelHorizon: /^\d+$/,
  sTravelDuration: /^\d+$/,
  sPaxTotal: /^\d+$/,
  sPaxAdult: /^\d+$/,
  sPaxChildren: /^\d+$/,
  sPaxInfants: /^\d+$/,
  sPaxSenior: /^\d+$/,
  sPaxYouth: /^\d+$/,
  sPaxCompanion: /^\d+$/,
  sClassOutbound: /^Eurostar (Standard|Plus|Premier)$/,
  sOutboundTime: /^\d{2}:\d{2}$/,
  sESTrainNumberOutbound: /^\d{4}$/,
  sClassInbound: /^Eurostar (Standard|Plus|Premier)$/,
  sInboundTime: /^\d{2}:\d{2}$/,
  sESTrainNumberInbound: /^\d{4}$/,
  products_count: /^\d+$/,
  product_status: [/^(past|upcoming)$/],
  product_name: [/^\d{7} - \d{7}(:adult)?$/],
  product_id: [/^\d{7} - \d{7}$/],
  product_quantity: [/^\d+$/],
  product_price: [/^\d+\.\d{2}$/],
  product_brand: [/^[A-Z]{2}$/],
  product_category: ["trains"],
  product_variant: [/^(outbound|inbound)$/],
  product_departure_date: [/^(\d{4}-\d{2}-\d{2}|null)$/],
  product_return_date: [/^(\d{4}-\d{2}-\d{2}|null)$/],
  product_train_class: [/^Eurostar (Standard|Plus|Premier)$/],
  product_train_route: [/^(london route|continent route)$/],
  product_train_origin_stationcode: [/^\d{7}$/],
  product_train_destination_stationcode: [/^\d{7}$/],
  product_train_number: [/^\d{4}$/],
  product_train_fbccode: [/^.*$/],
  product_train_departuretime: [/^\d{2}:\d{2}$/],
  product_train_arrivaltime: [/^\d{2}:\d{2}$/],
  product_train_numberofconnections: [/^\d+$/],
  product_train_connectioncode: [/^(null|\d{7})$/],
  product_train_connectionoperator: [/^(null|Eurostar|SNCF)?$/],
  product_train_tickettype: [/^(ESTAR_PUB_(STD|PLUS|PREM)|SNCF1SF|RED_ESTAR_PUB_PLUS|null)$/],
  product_train_passenger_type: [/^(adult|null)$/],
  product_hotel_destination_code: [],
  product_hotel_starrating: [],
  product_hotel_origin_code: [],
  product_hotel_occupancy: [],
  product_hotel_review_count: [],
  product_hotel_review_score: [],
  product_hotel_room_extra: [],
  product_hotel_promotion: [],
  product_hotel_package_savings: [],
  product_train_fare_name: [/^(through fare|null)?$/],
  product_train_fare_type: [/^(ES_ER|ER_SN|null)?$/],
  page_name: "ManageYourBooking"
},
{
	currency: /^(GBP|EUR|USD)$/, 
	funnel_name: /^Login|CustomerDashboard|Trains|Hotels|Packages|Subscriptions|ManageBooking|BusinessDashboard|Snap$/,
	page_category: "Checkout",
	ld_version: "design-system",
	event: "TealiumView",
	activityType: /^(train exchange|package exchange|hotel exchange|loyalty exchange)$/,
	isLoggedIn: /(true|false)/,
        customer_hashedemail: /^.{0,64}$/,
        customer_is_admin: /(true|false|null)/,
        businessID: null,
        loyaltyTier: /^(Classique|Carte Blanche|Silver|Gold|null)$/,
	membershipID: /^.{0,17}$/,
        membershipDetails: /^.{0,100}$/,
        pointsToSpend: /\d*/,
        pointsToUpgrade: /\d*/,
	directOrConnection: /(direct|connection)/,
        sJourneyType: /(One way|Return)/,
        sFromCode: /^\d{7}$/,
        sFromName: /.+/,
        sToCode: /^\d{7}$/,
        sToName: /.+/,
        sDateOutbound: /^\d{4}-\d{2}-\d{2}$/,
        sDateInbound: /^$|^\d{4}-\d{2}-\d{2}$/,
        sTravelHorizon: /\d+/,
        sTravelDuration: /^(\d+|null|undefined)$/,
        sPaxTotal: /\d+/,
        sPaxAdult: /\d+/,
        sPaxChildren: /\d+/,
        sPaxInfants: /\d+/,
        sPaxSenior: /\d+/,
        sPaxYouth: /\d+/,
        sPaxCompanion: /\d+/,
	basket_value_inpoints: /\d+/,
        pointsOrRegular: /(regular booking|points booking)/,
        promoBooking: /^.*$/,
        ecommerce_action: "checkout",
	payment_methods: /Card|GooglePay|Klarna_BNPL|PayPal|SavedCard/,
        club_eurostar_discount: /(\d+|none|member)/,
	basket_value: /^\d+(\.\d{1,2})?$/,
	products_count: /\d+/,
	product_brand: [/^(Allianz|ES|[A-Z]+)$/],
	product_id: [/^(\d{7}( - \d{7})?|.*)$/],
	product_category: [/^(trains|insurance)$/],
        product_name: [/^(\d{7} - \d{7}:adult|.*insurance)$/],
        product_price: [/^\d+(\.\d{2})?$/],
        product_price_inpoints: [/^(\d+|null|undefined)$/],
	product_quantity: [/\d+/],
        product_train_numberofconnections: [/(\d+|null|undefined)?/],
        product_departure_date: [/^\d{4}-\d{2}-\d{2}$/],
	product_train_departuretime: [/^\d{2}:\d{2}$/],
        product_train_fbccode: [/^.+$/],
        product_train_number: [/^\d+$/],
        product_variant: [/^(outbound|inbound|comprehensive)$/],
	product_hotel_origin_code: [/^(\d+|null|unudefined)$/],
        product_hotel_destination_code: [/^(\d+|null|unudefined)$/],
        product_hotel_occupancy: [/^(\d+|null|unudefined)$/],
        product_hotel_starrating: [/^(\d+|null|unudefined)$/],
        product_hotel_review_count: [/^(\d+|null|unudefined)$/],
        product_hotel_review_score: [/^(\d+|null|unudefined)$/],
        product_hotel_room_extra: [/^(\d+|null|unudefined)$/],
	product_return_date: [/^(\d{4}-\d{2}-\d{2}|null|unudefined)$/],
        product_train_class: [/^Eurostar (Standard|Plus|Premier)$/],
        product_train_route: [/^(london route|continent route)$/],
        product_train_origin_stationcode: [/^\d{7}$/],
        product_train_destination_stationcode: [/^\d{7}$/],
        product_train_arrivaltime: [/^\d{2}:\d{2}$/],
        product_train_tickettype: [/^(ESTAR_PUB_(STD|PLUS|PREM)|SNCF1SF|RED_ESTAR_PUB_PLUS|null)$/],
        product_train_connectionoperator: [/^(null|Eurostar|SNCF)?$/],
        product_train_passenger_type: [/^(adult|null)$/],
        product_train_fare_name: [/^(through fare|sumated fare|null|undefined)?$/],
        product_train_fare_type: [/^(ES_ER|ER_SN|null)?$/],
	product_cancellation_policy: [null],
	page_name: "Checkout"
},
{
	event: "TealiumView",
	funnel_name: "ManageBooking",
	page_category: "Upgrade",
	currency: /^(GBP|EUR|USD)$/, 
	ecommerce_action: "product impressions",
	isLoggedIn: /(true|false)/,
        customer_hashedemail: /^.{0,64}$/,
        customer_is_admin: /(true|false|null)/,
        businessID: null,
        loyaltyTier: /^(Carte Blanche|Silver|Gold|null)$/,
	membershipID: /^.{0,17}$/,
        membershipDetails: /^.{0,100}$/,
	pointsToSpend: /\d*/,
        pointsToUpgrade: /\d*/,
	mktOptions: "false",
	pnr: /^[A-Z0-9]{6}$/, 
	purchase_hashedemail: /^.{0,64}$/,
	transaction_date: /^[\d-]{10}$/,
	sFromCode: /^\d{7}$/,
        sFromName: /.+/,
        sToCode: /^\d{7}$/,
        sToName: /.+/,
	sJourneyType: /(One way|Return)/,
	directOrConnection: /(direct|connection)/,
	sDateOutbound: /^$|undefined|\d{4}-\d{2}-\d{2}$/,
        sDateInbound: /^$|undefined|^\d{4}-\d{2}-\d{2}$/,
	sTravelHorizon: /\d+/,
        sTravelDuration: null,
        sPaxTotal: /\d+/,
        sPaxAdult: /\d+/,
        sPaxChildren: /\d+/,
        sPaxInfants: /\d+/,
        sPaxSenior: /\d+/,
        sPaxYouth: /\d+/,
        sPaxCompanion: /\d+/,
	product_brand: [
		"ES"
	],
	product_category: [
		"trains"
	],
	product_departure_date: [
		"2025-07-03"
	],
	product_id: [
		"7015400 - 8727100"
	],
	product_name: [
		"7015400 - 8727100:adult"
	],
	product_price: [
		"17.00"
	],
	product_quantity: [
		1
	],
	product_return_date: [
		null
	],
	product_train_arrivaltime: [
		"10:19"
	],
	product_train_class: [
		"Eurostar Plus"
	],
	product_train_connectioncode: [
		null
	],
	product_train_connectionoperator: [
		null
	],
	product_train_departuretime: [
		"07:01"
	],
	product_train_destination_stationcode: [
		"8727100"
	],
	product_train_fbccode: [
		"H17PSXASBGN"
	],
	product_train_number: [
		"9004"
	],
	product_train_numberofconnections: [
		"1"
	],
	product_train_origin_stationcode: [
		"7015400"
	],
	product_train_passenger_type: [/^(adult|null)$/],
	product_train_route: [/^(london route|continent route)$/],
	product_train_tickettype: [
		"ESTAR_PUB_PLUS"
	],
	product_variant: [
		"outbound"
	],
	products_count: 1,
	page_name: "Upgrade/SelectUpgrade"
}	
];
