/**
 * Site Data Configuration
 *
 * All candidate-specific content lives here.
 * To re-skin this template for a new candidate, update this file
 * and swap out the images in src/assets/.
 */

const siteData = {
  // ── Candidate ──────────────────────────────────────────────
  candidate: {
    firstName: 'Sarah',
    lastName: 'Connor',
    fullName: 'Sarah Connor',
  },

  // ── Campaign ───────────────────────────────────────────────
  campaign: {
    name: 'Sarah Connor Campaign',
    slogan: 'Building a stronger community, together.',
    donateUrl: '#',
    pacName: 'Speak Up',
    pacDescription: "Speak Up is Sarah Connor\u2019s official federal political action committee, supporting candidates who are committed to fighting for democracy. With our basic freedoms to vote, to control our bodies and to decide our own futures on the line, we stand with those who speak up for justice, equality, and the democratic process.",
  },

  // ── Contact ────────────────────────────────────────────────
  contact: {
    email: 'support@winadvocacy.com',
    social: {
      facebook: '#',
      instagram: '#',
      twitter: '#',
    },
    privacyUrl: '#',
    termsUrl: '#',
  },

  // ── Donation ───────────────────────────────────────────────
  donation: {
    amounts: [10, 25, 50, 100, 250],
    disclaimer: 'Contributions are not deductible for federal income tax purposes.',
  },

  // ── Navigation ────────────────────────────────────────────
  navigation: {
    links: [
      { label: 'ABOUT', href: '/about' },
      { label: 'AGENDA', href: '/agenda' },
      { label: 'NEWS', href: '/news' },
      { label: 'CONTACT', href: '/contact' },
    ],
  },

  // ── Hero ───────────────────────────────────────────────────
  hero: {
    headline: 'Fighting for you.',
    disclaimerText: 'By providing your contact information, you agree to receive campaign updates and messages from us. Message and data rates may apply. Reply STOP to opt out.',
  },

  // ── Image + Text Section ───────────────────────────────────
  imageText: {
    headline: 'Championing Solutions. Electing Change.',
    subheading: 'We believe in the power of diverse voices to drive meaningful change.',
  },

  // ── About Section (Homepage) ────────────────────────────────
  about: {
    heading: 'About Sarah',
    bio: [
      'Sarah Connor was born and raised right here in our community. Economic hardship and a system that too often looked the other way shaped her determination to fight for something better.',
      'A community organizing program opened the door to public service. Sarah found her voice, discovered her purpose, and built a belief that change was possible \u2014 not someday, but now.',
      'Today, Sarah continues the fight \u2014 standing up for working families and making sure every voice in our community is heard.',
    ],
  },

  // ── About Page (Full Page) ────────────────────────────────
  aboutPage: {
    sectionLabel: 'Meet Sarah Connor',
    headline: 'A Voice for Our Community.',
    intro: [
      'Sarah Connor is running for the U.S. Senate because she believes government should work for the people \u2014 not the other way around. Built on faith, family, and freedom, she\u2019s committed to defending the values that keep our communities strong.',
      'From a working-class household to a career in public service, Sarah has always stood for limited government, personal responsibility, and the opportunity for every American to succeed.',
    ],
    bioLabel: 'From Our Community',
    bioHeading: 'Her Story',
    bio: [
      'Sarah grew up in a small town where hard work wasn\u2019t just a value \u2014 it was a way of life. Raised by parents who ran a local business, she learned early on the importance of fiscal responsibility and limited government.',
      'After earning her degree in public policy, Sarah served on the city council where she cut wasteful spending and fought to keep government accountable. Now, she\u2019s ready to bring that same conservative leadership to Washington.',
    ],
    valuesLabel: 'Our Platform',
    valuesHeading: 'What Sarah Stands For',
    valuesSubheading: 'Core principles guiding her campaign for the U.S. Senate.',
    values: [
      {
        title: 'Fiscal Responsibility',
        description: 'Cutting wasteful government spending, balancing the budget, and ensuring every taxpayer dollar is spent wisely and transparently.',
      },
      {
        title: 'National Security',
        description: 'Securing our borders, supporting our military and veterans, and keeping our communities safe from threats both foreign and domestic.',
      },
      {
        title: 'Small Business Growth',
        description: 'Lowering taxes and reducing burdensome regulations so entrepreneurs and small business owners can thrive and create jobs.',
      },
    ],
    ctaLabel: 'Get Involved',
    ctaHeading: 'Join the Fight',
    ctaText: 'Sarah can\u2019t do this alone. It takes a community of committed patriots to send a true conservative to Washington. Stand with Sarah today.',
  },

  // ── Agenda Page ──────────────────────────────────────────────
  agenda: {
    sectionLabel: "Sarah's Agenda",
    headline: 'Putting America First.',
    intro: [
      'Sarah Connor is running on a bold, conservative agenda built around the principles that made this country great: limited government, individual liberty, and fiscal responsibility. She believes Washington has forgotten who it works for — and she intends to remind them.',
      'From securing our borders to cutting taxes and standing up for the Constitution, Sarah has a concrete plan to fight for the hardworking families in our state and across America.',
    ],
    prioritiesLabel: 'Legislative Priorities',
    prioritiesHeading: 'The Agenda for Action',
    prioritiesSubheading: 'Six core initiatives Sarah will champion on day one in the United States Senate.',
    priorities: [
      {
        number: '1',
        title: 'Secure the Border',
        description: 'Finish the wall, end catch-and-release, and give Border Patrol the resources they need to keep our communities safe and enforce the rule of law.',
      },
      {
        number: '2',
        title: 'Cut Taxes & Spending',
        description: 'Lower income taxes for working families and small businesses while eliminating wasteful federal spending and moving toward a balanced budget.',
      },
      {
        number: '3',
        title: 'Defend the 2nd Amendment',
        description: 'Protect every law-abiding citizen\'s constitutional right to keep and bear arms — no compromises, no loopholes, no government overreach.',
      },
      {
        number: '4',
        title: 'Support Law Enforcement',
        description: 'Back the blue by funding police departments, opposing efforts to defund public safety, and ensuring our officers have the tools and training they deserve.',
      },
      {
        number: '5',
        title: 'Protect American Energy',
        description: 'Unleash domestic oil, gas, and clean-coal production to lower energy costs, create jobs, and end our dependence on foreign adversaries for fuel.',
      },
      {
        number: '6',
        title: 'Empower Parents in Education',
        description: 'Give parents a real voice in their children\'s education through school choice, curriculum transparency, and an end to one-size-fits-all federal mandates.',
      },
    ],
    commitmentsLabel: 'Core Commitments',
    commitmentsHeading: 'Promises You Can Count On',
    commitmentsSubheading: 'The foundational commitments that will guide every vote Sarah casts in the Senate.',
    commitments: [
      {
        title: 'Fiscal Discipline',
        description: 'Every taxpayer dollar will be treated with respect. Sarah will fight to cut reckless spending, audit federal agencies, and demand a balanced budget amendment.',
      },
      {
        title: 'Strong National Defense',
        description: 'A fully funded military, unwavering support for our veterans, and a foreign policy rooted in peace through strength — because American security is non-negotiable.',
      },
      {
        title: 'Constitutional Liberties',
        description: 'From the First Amendment to the Tenth, Sarah will defend the Bill of Rights against federal overreach and protect the freedoms our Founders enshrined.',
      },
    ],
    ctaLabel: 'Take Action',
    ctaHeading: 'Stand With Sarah',
    ctaText: 'This agenda only becomes reality with your support. Join thousands of patriots across the state who are ready to send a true conservative to Washington and take our country back.',
  },

  // ── Signup Section ─────────────────────────────────────────
  signup: {
    heading: 'Sign Up to Join Us',
    subheading: 'Be part of the movement for change.',
    description: [
      'Join our community and help us build a stronger future together. Your voice matters, and together we can make a difference in our democracy and our communities.',
      'Every contribution \u2014 no matter the size \u2014 goes directly toward expanding voter outreach, supporting grassroots organizers, and funding the programs that strengthen our neighborhoods. Your donation helps keep this movement independent, people-powered, and focused on the issues that matter most to working families.',
    ],
  },

  // ── Video Section ─────────────────────────────────────────
  video: {
    headline: 'A Voice for',
    highlightText: 'Every Family.',
    description: 'Hear directly from Sarah about why she\'s running for U.S. Senate and what drives her passion for fighting for working families, affordable healthcare, and a government that truly serves the people.',
  },

  // ── News & Press ─────────────────────────────────────────
  news: {
    sectionHeading: 'News & Press',
    articles: [
      {
        slug: 'bold-economic-agenda',
        date: '2026-02-06',
        category: 'Press Release',
        image: 'image1',
        title: 'Sarah Connor Releases Bold Economic Agenda for Working Families',
        excerpt: 'Today, U.S. Senate candidate Sarah Connor unveiled a comprehensive economic plan focused on lowering costs for working families, investing in job training programs, and ensuring fair wages across the state.',
        body: [
          'Today, U.S. Senate candidate Sarah Connor unveiled a comprehensive economic plan focused on lowering costs for working families, investing in job training programs, and ensuring fair wages across the state.',
          'The plan, titled "Prosperity for All," includes proposals to cap childcare costs at 7% of household income, expand apprenticeship programs in partnership with local businesses, and raise the minimum wage to keep pace with the cost of living.',
          '"Working families in this state are stretched thin," Connor said at a press conference in downtown Springfield. "They\'re choosing between groceries and rent, between healthcare and saving for their children\'s future. That\'s not the America I believe in, and it\'s not the future I\'m fighting for."',
          'The economic agenda also calls for targeted tax relief for small businesses with fewer than 50 employees, a new state infrastructure bank to finance roads, bridges, and broadband expansion, and increased funding for community colleges and vocational training centers.',
          'Independent economists have praised the plan for its pragmatic approach. "This is a serious policy proposal that addresses real challenges facing working families," said Dr. Maria Chen, an economist at the State Policy Institute. "The combination of direct cost relief and investment in workforce development could make a meaningful difference."',
          'Connor\'s campaign has made economic opportunity a centerpiece of its platform, and this latest rollout is part of a series of detailed policy proposals the campaign plans to release in the coming weeks.',
        ],
      },
      {
        slug: 'education-coalition-endorsement',
        date: '2026-02-03',
        category: 'Press Release',
        image: 'image2',
        title: 'Connor Campaign Announces Endorsement from State Education Coalition',
        excerpt: 'The statewide Education Coalition announced their endorsement of Sarah Connor for U.S. Senate, citing her longstanding commitment to public education funding, teacher support, and expanded access to early childhood programs.',
        body: [
          'The statewide Education Coalition announced their endorsement of Sarah Connor for U.S. Senate, citing her longstanding commitment to public education funding, teacher support, and expanded access to early childhood programs.',
          'The endorsement was announced at a ceremony at Lincoln Elementary School, where Connor was joined by teachers, parents, and education advocates from across the state.',
          '"Sarah Connor understands that investing in education is investing in our future," said Coalition President Dr. James Wright. "Her track record on education issues — from fighting for teacher pay increases to championing universal pre-K — sets her apart in this race."',
          'Connor, who served on the city council education committee for six years, has proposed a comprehensive education plan that includes increasing per-pupil funding by 15%, establishing a statewide teacher recruitment and retention program, and expanding free school meals to all public school students.',
          '"Every child in this state deserves access to a world-class education, regardless of their zip code," Connor told the crowd. "As your Senator, I will fight every day to make sure our schools have the resources they need and our teachers are treated with the respect they deserve."',
          'The Education Coalition represents over 50,000 educators, administrators, and support staff across the state and is considered one of the most influential endorsements in state politics.',
        ],
      },
      {
        slug: 'bipartisan-healthcare-action',
        date: '2026-01-28',
        category: 'Press Release',
        image: 'image3',
        title: 'Connor Calls for Bipartisan Action on Healthcare Access',
        excerpt: 'At a town hall in Riverside County, Sarah Connor outlined her plan to expand affordable healthcare coverage, protect patients with pre-existing conditions, and lower prescription drug costs for seniors.',
        body: [
          'At a town hall in Riverside County, Sarah Connor outlined her plan to expand affordable healthcare coverage, protect patients with pre-existing conditions, and lower prescription drug costs for seniors.',
          'The healthcare proposal centers on three pillars: expanding Medicaid coverage, capping out-of-pocket prescription drug costs at $2,000 per year for seniors, and creating a public option for individuals and small businesses on the state exchange.',
          '"Healthcare is not a partisan issue — it\'s a human issue," Connor said to an audience of over 300 attendees. "I\'ve sat across the table from Republicans and Democrats alike, and I know we can find common ground to make healthcare more affordable and accessible for every family in this state."',
          'Connor shared stories from constituents who have struggled with medical debt, insurance denials, and the rising cost of prescription medications. She was joined on stage by Dr. Patricia Holmes, a rural family physician who spoke about the challenges of providing care in underserved communities.',
          '"In my practice, I see patients every day who delay care because they can\'t afford it," Dr. Holmes said. "Sarah\'s plan would make a real difference for the families I serve."',
          'The town hall was part of a series of community listening sessions Connor has been holding across the state, which she says have directly shaped her policy positions. The healthcare plan has received praise from both the State Medical Association and the Senior Citizens Advocacy Council.',
        ],
      },
      {
        slug: 'veterans-support-initiative',
        date: '2026-01-22',
        category: 'Campaign Update',
        image: 'image4',
        title: 'Connor Unveils Comprehensive Veterans Support Initiative',
        excerpt: 'Sarah Connor announced a sweeping plan to improve services for veterans, including expanded mental health resources, job placement programs, and streamlined access to VA benefits.',
        body: [
          'Sarah Connor announced a sweeping plan to improve services for veterans, including expanded mental health resources, job placement programs, and streamlined access to VA benefits.',
          'Speaking at the American Legion Post 42 in Oakville, Connor outlined a multi-pronged approach to addressing the challenges facing the state\'s veteran community. The plan includes establishing three new VA community clinics in underserved rural areas, creating a veteran-to-career transition program in partnership with local employers, and hiring additional claims processors to reduce wait times for benefits.',
          '"Our veterans answered the call to serve this country, and we owe them more than gratitude — we owe them action," Connor said. "Too many of our veterans are falling through the cracks, waiting months for benefits they\'ve earned, struggling to find good jobs, and not getting the mental health support they need."',
          'The initiative also proposes a dedicated veterans mental health hotline staffed 24/7, expanded eligibility for veteran housing assistance, and a new grant program for veteran-owned small businesses.',
          'Retired Army Sergeant Major David Torres, who introduced Connor at the event, praised the proposal. "I\'ve seen too many of my brothers and sisters struggle when they come home. Sarah\'s plan addresses the real issues we face, and she\'s been listening to veterans from day one."',
          'Connor noted that funding for the initiative would come from redirecting wasteful Pentagon spending and closing loopholes in defense contracting. The plan has been endorsed by three major veteran advocacy organizations.',
        ],
      },
      {
        slug: 'grassroots-fundraising-milestone',
        date: '2026-01-15',
        category: 'Campaign Update',
        image: 'image5',
        title: 'Connor Campaign Reaches Grassroots Fundraising Milestone',
        excerpt: 'The Sarah Connor for Senate campaign announced it has surpassed 50,000 individual donors, with an average contribution of $27, demonstrating broad grassroots support across the state.',
        body: [
          'The Sarah Connor for Senate campaign announced it has surpassed 50,000 individual donors, with an average contribution of $27, demonstrating broad grassroots support across the state.',
          'The milestone, reached just four months after Connor officially announced her candidacy, represents contributions from all 67 counties in the state. Campaign manager Lisa Park called the achievement "a testament to the movement Sarah is building."',
          '"This campaign is powered by working people — teachers, nurses, small business owners, retirees — who are chipping in what they can because they believe in Sarah\'s vision for this state," Park said. "While our opponents rely on PAC money and special interests, we\'re building something different."',
          'Connor celebrated the milestone at a volunteer appreciation event in the capital, where she thanked supporters and outlined her plans for the final months of the campaign. "Every dollar from every donor tells me the same thing: people are ready for change. They\'re ready for a Senator who works for them, not for the lobbyists and corporations."',
          'The campaign also announced it has recruited over 5,000 volunteers statewide and opened 12 field offices, with plans to open five more in the coming weeks. The grassroots infrastructure is seen as a key advantage heading into the primary season.',
          'Political analysts note that the small-dollar fundraising numbers are particularly impressive in a race that has attracted significant national attention. "These numbers suggest genuine enthusiasm at the grassroots level," said political scientist Dr. Rachel Kim. "That kind of support is difficult to manufacture and can be a powerful force in a competitive election."',
        ],
      },
      {
        slug: 'climate-resilience-plan',
        date: '2026-01-08',
        category: 'Policy',
        image: 'image6',
        title: 'Connor Introduces Climate Resilience and Clean Energy Plan',
        excerpt: 'Sarah Connor released a detailed climate and energy plan that aims to create 100,000 clean energy jobs, invest in infrastructure resilience, and transition the state to 80% renewable energy by 2040.',
        body: [
          'Sarah Connor released a detailed climate and energy plan that aims to create 100,000 clean energy jobs, invest in infrastructure resilience, and transition the state to 80% renewable energy by 2040.',
          'The plan, developed in consultation with environmental scientists, energy industry leaders, and community advocates, takes a pragmatic approach that emphasizes economic opportunity alongside environmental protection.',
          '"Climate change isn\'t a distant threat — it\'s here now, and our communities are already feeling the impact," Connor said at a solar energy facility in Green Valley. "But I also see enormous economic opportunity. The clean energy transition can create thousands of good-paying jobs right here in our state, and I intend to make sure our workers and communities lead the way."',
          'Key provisions of the plan include a $2 billion state green infrastructure fund to upgrade roads, bridges, and water systems to withstand extreme weather; tax incentives for businesses that adopt clean energy technologies; workforce retraining programs for fossil fuel workers transitioning to clean energy careers; and grants for farmers adopting sustainable agriculture practices.',
          'The plan also calls for investing in electric vehicle charging infrastructure, strengthening building codes to improve energy efficiency, and protecting natural lands and waterways as carbon sinks.',
          'Environmental groups praised the proposal, while energy industry representatives noted its balanced approach. "This plan shows that economic growth and environmental responsibility can go hand in hand," said the Sierra Club\'s state director, Maria Santos. "Sarah Connor is leading with both vision and pragmatism."',
        ],
      },
    ],
  },

  // ── Popup Modal ────────────────────────────────────────────
  popup: {
    headline: 'Join our movement and help build a stronger community together.',
    disclaimerText: 'By providing your contact information, you agree to receive updates and messages from us. Message and data rates may apply. Reply STOP to opt out. Your information will not be shared with third parties.',
  },

  // ── Meta / SEO ─────────────────────────────────────────────
  meta: {
    title: 'Sarah Connor | Building a Stronger Community, Together',
    description: "Join Sarah Connor\u2019s campaign to build a stronger community. Born and raised right here, Sarah is committed to representing working families and delivering real results.",
    keywords: 'Sarah Connor, campaign, community, working families, public service, elect Sarah Connor',
  },
}

export default siteData
