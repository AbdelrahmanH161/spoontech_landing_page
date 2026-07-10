import type { LegalPageContent } from "./types"

const en: LegalPageContent = {
  title: "Privacy Policy",
  subtitle: "Website Version · Last Updated: July 7, 2026",
  blocks: [
    { type: "h2", text: "Introduction" },
    {
      type: "p",
      text: 'SpoonTech is committed to protecting the privacy and security of everyone who uses our website and restaurant management platform (collectively, the "Services").',
    },
    {
      type: "p",
      text: "This Privacy Policy explains how we collect, use, store, disclose, and protect your personal information when you visit our website, create an account, use our software, or interact with any SpoonTech service.",
    },
    {
      type: "p",
      text: "Our goal is to process your information in a lawful, transparent, and secure manner while respecting your privacy rights. We follow internationally recognized privacy principles, including data minimization, purpose limitation, accuracy, storage limitation, integrity, confidentiality, and accountability.",
    },
    {
      type: "p",
      text: "By accessing or using SpoonTech, you acknowledge that you have read and understood this Privacy Policy.",
    },

    { type: "h2", text: "Data Controller" },
    {
      type: "p",
      text: "SpoonTech is the data controller responsible for the processing of personal information collected through our website and software platform.",
    },
    {
      type: "p",
      text: "If you have any questions regarding this Privacy Policy or our data practices, you may contact us using the information provided at the end of this document.",
    },

    { type: "h2", text: "Information We Collect" },
    { type: "h3", text: "Account Information" },
    { type: "p", text: "When creating a SpoonTech account, we may collect:" },
    {
      type: "ul",
      items: [
        "Full name",
        "Email address",
        "Phone number",
        "Restaurant or business name",
        "Business address",
        "Job title",
        "Login credentials",
      ],
    },

    { type: "h3", text: "Restaurant Information" },
    {
      type: "p",
      text: "To provide our restaurant management services, we may process information including:",
    },
    {
      type: "ul",
      items: [
        "Restaurant profile",
        "Branch information",
        "Menu items and pricing",
        "Table layouts",
        "Kitchen workflow configuration",
        "Employee accounts and permissions",
        "Customer loyalty program data",
        "Orders and transaction history",
      ],
    },

    { type: "h3", text: "Payment Information" },
    {
      type: "p",
      text: "When subscription or payment services are used, we may collect payment-related information through secure third-party payment providers. SpoonTech does not store complete payment card numbers on its own servers.",
    },

    { type: "h3", text: "Device and Technical Information" },
    {
      type: "p",
      text: "When you access SpoonTech through our website, we may automatically collect technical information including:",
    },
    {
      type: "ul",
      items: [
        "Browser type",
        "Operating system",
        "IP address",
        "Language settings",
        "Network information",
        "Device identifiers",
        "Error logs",
        "Website performance data",
      ],
    },
    {
      type: "p",
      text: "This information helps us improve platform performance, maintain security, and troubleshoot technical issues.",
    },

    { type: "h3", text: "Customer Data" },
    {
      type: "p",
      text: "Restaurant customers using SpoonTech-powered services may voluntarily provide information such as:",
    },
    {
      type: "ul",
      items: [
        "Name",
        "Phone number",
        "Email address",
        "Loyalty points activity",
        "Order history",
        "Reservation information",
        "Feedback and ratings",
      ],
    },
    {
      type: "p",
      text: "Restaurant owners remain responsible for ensuring they have appropriate permission to collect and process customer information.",
    },

    { type: "h3", text: "Usage Information" },
    {
      type: "p",
      text: "Whenever you use SpoonTech, we automatically collect information regarding how our platform is used, including:",
    },
    {
      type: "ul",
      items: [
        "Pages visited",
        "Features accessed",
        "Session duration",
        "Click activity",
        "Error logs",
        "Performance metrics",
        "Date and time of access",
      ],
    },
    {
      type: "p",
      text: "This information allows us to improve usability, reliability, and overall user experience.",
    },

    { type: "h3", text: "Cookies" },
    { type: "p", text: "SpoonTech uses cookies and similar technologies to:" },
    {
      type: "ul",
      items: [
        "Keep users signed in",
        "Remember preferences",
        "Improve website performance",
        "Measure platform usage",
        "Analyze traffic",
        "Enhance security",
      ],
    },
    {
      type: "p",
      text: "You can manage or disable cookies through your browser settings. However, certain features of SpoonTech may not function correctly without them.",
    },

    { type: "h2", text: "How We Use Your Information" },
    { type: "p", text: "We process personal information to:" },
    {
      type: "ul",
      items: [
        "Create and manage user accounts",
        "Deliver SpoonTech services",
        "Process subscriptions and payments",
        "Support restaurant operations",
        "Enable QR ordering and customer interactions",
        "Provide customer support",
        "Improve our software and AI-powered features",
        "Detect fraud and unauthorized activity",
        "Generate operational analytics",
        "Comply with legal obligations",
        "Communicate important service updates",
      ],
    },

    { type: "h2", text: "Data Sharing and Third Parties" },
    {
      type: "p",
      text: "SpoonTech does not sell or rent your personal information to third parties.",
    },
    {
      type: "p",
      text: "We may share your information with trusted third-party service providers that help us operate and improve our Services. These providers may include cloud hosting providers, payment processors, analytics providers, customer support platforms, and communication service providers.",
    },
    {
      type: "p",
      text: "We may also disclose your information when required to comply with applicable laws, regulations, legal processes, or lawful requests from public authorities, or when necessary to protect the rights, property, or safety of SpoonTech, our customers, or others.",
    },
    {
      type: "p",
      text: "All third-party service providers are required to process your information securely and only for the purposes specified by SpoonTech.",
    },

    { type: "h2", text: "Data Retention" },
    {
      type: "p",
      text: "We retain your personal information only for as long as necessary to provide our Services, fulfill the purposes described in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements.",
    },
    {
      type: "p",
      text: "When your information is no longer required, we will securely delete, anonymize, or otherwise dispose of it in accordance with applicable laws and industry best practices.",
    },
    {
      type: "p",
      text: "Certain information may be retained for longer periods where required by law or where necessary to protect SpoonTech's legitimate business interests.",
    },

    { type: "h2", text: "Security Measures" },
    {
      type: "p",
      text: "Protecting your information is a priority for SpoonTech. We implement appropriate technical and organizational security measures designed to safeguard your personal information against unauthorized access, disclosure, alteration, loss, or destruction.",
    },
    {
      type: "p",
      text: "These measures may include encrypted data transmission, secure hosting environments, access controls, authentication mechanisms, regular system monitoring, and routine security updates.",
    },
    {
      type: "p",
      text: "While we take reasonable steps to protect your information, no method of transmitting data over the Internet or storing electronic information is completely secure. Accordingly, we cannot guarantee absolute security.",
    },

    { type: "h2", text: "Your Rights" },
    {
      type: "p",
      text: "Depending on your location and the applicable privacy laws, you may have the right to:",
    },
    {
      type: "ul",
      items: [
        "Access the personal information we hold about you.",
        "Request correction of inaccurate or incomplete information.",
        "Request deletion of your personal information, subject to applicable legal requirements.",
        "Request a copy of your personal information in a commonly used electronic format.",
        "Object to or restrict certain types of processing.",
        "Withdraw your consent where processing is based on consent.",
      ],
    },
    {
      type: "p",
      text: "To exercise any of these rights, please contact us using the information provided below. We will respond to your request within the timeframe required by applicable law.",
    },

    { type: "h2", text: "Contact Us" },
    {
      type: "p",
      text: "If you have any questions, concerns, or requests regarding this Privacy Policy or the way SpoonTech processes your personal information, please contact us:",
    },
    {
      type: "contact",
      lines: [
        { label: "Email", value: "info@spoontech.net", href: "mailto:info@spoontech.net" },
        { label: "Website", value: "www.spoontech.net", href: "https://www.spoontech.net" },
        { label: "Contact Number", value: "+201500588018", href: "tel:+201500588018" },
      ],
    },
    {
      type: "p",
      text: "We will make every reasonable effort to respond to your inquiry promptly and in accordance with applicable privacy laws.",
    },
  ],
}

const ar: LegalPageContent = {
  title: "سياسة الخصوصية",
  subtitle: "إصدار الموقع الإلكتروني · آخر تحديث: 7 يوليو 2026",
  blocks: [
    { type: "h2", text: "مقدمة" },
    {
      type: "p",
      text: 'تلتزم سبون تك بحماية خصوصية وأمان كل من يستخدم موقعنا الإلكتروني ومنصة إدارة المطاعم الخاصة بنا (يُشار إليهما معاً بـ"الخدمات").',
    },
    {
      type: "p",
      text: "توضح سياسة الخصوصية هذه كيفية جمعنا لمعلوماتك الشخصية واستخدامها وتخزينها والإفصاح عنها وحمايتها عند زيارتك لموقعنا الإلكتروني، أو إنشاء حساب، أو استخدام برنامجنا، أو التفاعل مع أي من خدمات سبون تك.",
    },
    {
      type: "p",
      text: "هدفنا هو معالجة معلوماتك بطريقة قانونية وشفافة وآمنة مع احترام حقوق خصوصيتك. ونتّبع مبادئ الخصوصية المعترف بها دولياً، بما في ذلك تقليل البيانات، وتحديد الغرض، والدقة، وتحديد مدة التخزين، والسلامة، والسرية، والمساءلة.",
    },
    {
      type: "p",
      text: "من خلال الوصول إلى سبون تك أو استخدامها، فإنك تقر بأنك قد قرأت وفهمت سياسة الخصوصية هذه.",
    },

    { type: "h2", text: "جهة التحكم في البيانات" },
    {
      type: "p",
      text: "تُعد سبون تك جهة التحكم في البيانات المسؤولة عن معالجة المعلومات الشخصية التي يتم جمعها من خلال موقعنا الإلكتروني ومنصتنا البرمجية.",
    },
    {
      type: "p",
      text: "إذا كانت لديك أي أسئلة بخصوص سياسة الخصوصية هذه أو ممارساتنا المتعلقة بالبيانات، يمكنك التواصل معنا باستخدام المعلومات الواردة في نهاية هذا المستند.",
    },

    { type: "h2", text: "المعلومات التي نجمعها" },
    { type: "h3", text: "معلومات الحساب" },
    { type: "p", text: "عند إنشاء حساب في سبون تك، قد نقوم بجمع:" },
    {
      type: "ul",
      items: [
        "الاسم الكامل",
        "البريد الإلكتروني",
        "رقم الهاتف",
        "اسم المطعم أو النشاط التجاري",
        "عنوان النشاط التجاري",
        "المسمى الوظيفي",
        "بيانات تسجيل الدخول",
      ],
    },

    { type: "h3", text: "معلومات المطعم" },
    {
      type: "p",
      text: "لتقديم خدمات إدارة المطاعم الخاصة بنا، قد نعالج معلومات تشمل:",
    },
    {
      type: "ul",
      items: [
        "الملف التعريفي للمطعم",
        "معلومات الفروع",
        "أصناف القائمة وأسعارها",
        "تخطيطات الطاولات",
        "إعدادات سير عمل المطبخ",
        "حسابات الموظفين وصلاحياتهم",
        "بيانات برنامج ولاء العملاء",
        "الطلبات وسجل المعاملات",
      ],
    },

    { type: "h3", text: "معلومات الدفع" },
    {
      type: "p",
      text: "عند استخدام خدمات الاشتراك أو الدفع، قد نجمع معلومات متعلقة بالدفع من خلال مزودي خدمات دفع خارجيين موثوقين. لا تقوم سبون تك بتخزين أرقام بطاقات الدفع الكاملة على خوادمها الخاصة.",
    },

    { type: "h3", text: "معلومات الجهاز والبيانات التقنية" },
    {
      type: "p",
      text: "عند وصولك إلى سبون تك من خلال موقعنا الإلكتروني، قد نجمع تلقائياً معلومات تقنية تشمل:",
    },
    {
      type: "ul",
      items: [
        "نوع المتصفح",
        "نظام التشغيل",
        "عنوان IP",
        "إعدادات اللغة",
        "معلومات الشبكة",
        "معرّفات الجهاز",
        "سجلات الأخطاء",
        "بيانات أداء الموقع الإلكتروني",
      ],
    },
    {
      type: "p",
      text: "تساعدنا هذه المعلومات على تحسين أداء المنصة، والحفاظ على الأمان، وحل المشكلات التقنية.",
    },

    { type: "h3", text: "بيانات العملاء" },
    {
      type: "p",
      text: "قد يقدّم عملاء المطاعم الذين يستخدمون خدمات مدعومة من سبون تك معلومات طوعية مثل:",
    },
    {
      type: "ul",
      items: [
        "الاسم",
        "رقم الهاتف",
        "البريد الإلكتروني",
        "نشاط نقاط الولاء",
        "سجل الطلبات",
        "معلومات الحجز",
        "الملاحظات والتقييمات",
      ],
    },
    {
      type: "p",
      text: "يتحمل أصحاب المطاعم مسؤولية التأكد من حصولهم على الإذن المناسب لجمع ومعالجة معلومات عملائهم.",
    },

    { type: "h3", text: "معلومات الاستخدام" },
    {
      type: "p",
      text: "عند استخدامك لسبون تك، نقوم تلقائياً بجمع معلومات حول كيفية استخدام منصتنا، بما في ذلك:",
    },
    {
      type: "ul",
      items: [
        "الصفحات التي تمت زيارتها",
        "الميزات التي تم الوصول إليها",
        "مدة الجلسة",
        "نشاط النقر",
        "سجلات الأخطاء",
        "مقاييس الأداء",
        "تاريخ ووقت الوصول",
      ],
    },
    {
      type: "p",
      text: "تتيح لنا هذه المعلومات تحسين سهولة الاستخدام والموثوقية وتجربة المستخدم بشكل عام.",
    },

    { type: "h3", text: "ملفات تعريف الارتباط (الكوكيز)" },
    { type: "p", text: "تستخدم سبون تك ملفات تعريف الارتباط والتقنيات المشابهة من أجل:" },
    {
      type: "ul",
      items: [
        "إبقاء المستخدمين مسجلين الدخول",
        "تذكر التفضيلات",
        "تحسين أداء الموقع الإلكتروني",
        "قياس استخدام المنصة",
        "تحليل حركة الزوار",
        "تعزيز الأمان",
      ],
    },
    {
      type: "p",
      text: "يمكنك إدارة ملفات تعريف الارتباط أو تعطيلها من خلال إعدادات متصفحك. ومع ذلك، قد لا تعمل بعض ميزات سبون تك بشكل صحيح بدونها.",
    },

    { type: "h2", text: "كيفية استخدامنا لمعلوماتك" },
    { type: "p", text: "نقوم بمعالجة المعلومات الشخصية من أجل:" },
    {
      type: "ul",
      items: [
        "إنشاء وإدارة حسابات المستخدمين",
        "تقديم خدمات سبون تك",
        "معالجة الاشتراكات والمدفوعات",
        "دعم عمليات المطاعم",
        "تمكين الطلب عبر رمز QR وتفاعلات العملاء",
        "تقديم دعم العملاء",
        "تحسين برامجنا وميزاتنا المدعومة بالذكاء الاصطناعي",
        "الكشف عن الاحتيال والأنشطة غير المصرح بها",
        "إنشاء تحليلات تشغيلية",
        "الامتثال للالتزامات القانونية",
        "التواصل بشأن تحديثات الخدمة المهمة",
      ],
    },

    { type: "h2", text: "مشاركة البيانات والأطراف الثالثة" },
    {
      type: "p",
      text: "لا تقوم سبون تك ببيع أو تأجير معلوماتك الشخصية لأطراف ثالثة.",
    },
    {
      type: "p",
      text: "قد نشارك معلوماتك مع مزودي خدمات موثوقين من أطراف ثالثة يساعدوننا في تشغيل خدماتنا وتحسينها. وقد يشمل هؤلاء المزودون مزودي الاستضافة السحابية، ومعالجي المدفوعات، ومزودي خدمات التحليلات، ومنصات دعم العملاء، ومزودي خدمات الاتصال.",
    },
    {
      type: "p",
      text: "قد نُفصح أيضاً عن معلوماتك عند الحاجة للامتثال للقوانين أو اللوائح أو الإجراءات القانونية المعمول بها، أو الطلبات القانونية الصادرة عن السلطات العامة، أو عند الضرورة لحماية حقوق أو ممتلكات أو سلامة سبون تك أو عملائنا أو الآخرين.",
    },
    {
      type: "p",
      text: "يُطلب من جميع مزودي خدمات الأطراف الثالثة معالجة معلوماتك بشكل آمن وللأغراض التي تحددها سبون تك فقط.",
    },

    { type: "h2", text: "الاحتفاظ بالبيانات" },
    {
      type: "p",
      text: "نحتفظ بمعلوماتك الشخصية فقط للمدة اللازمة لتقديم خدماتنا، وتحقيق الأغراض الموضحة في سياسة الخصوصية هذه، والامتثال للالتزامات القانونية، وتسوية النزاعات، وإنفاذ اتفاقياتنا.",
    },
    {
      type: "p",
      text: "عندما لا تعود معلوماتك مطلوبة، سنقوم بحذفها بشكل آمن أو إخفاء هويتها أو التخلص منها وفقاً للقوانين المعمول بها وأفضل الممارسات في هذا المجال.",
    },
    {
      type: "p",
      text: "قد يتم الاحتفاظ ببعض المعلومات لفترات أطول عندما يقتضي القانون ذلك أو عند الضرورة لحماية مصالح سبون تك التجارية المشروعة.",
    },

    { type: "h2", text: "الإجراءات الأمنية" },
    {
      type: "p",
      text: "تُعد حماية معلوماتك أولوية بالنسبة لسبون تك. ونطبّق إجراءات أمنية تقنية وتنظيمية مناسبة مصممة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو الإفصاح أو التعديل أو الفقدان أو الإتلاف.",
    },
    {
      type: "p",
      text: "وقد تشمل هذه الإجراءات نقل البيانات المشفّر، وبيئات استضافة آمنة، وضوابط الوصول، وآليات المصادقة، والمراقبة المنتظمة للأنظمة، والتحديثات الأمنية الدورية.",
    },
    {
      type: "p",
      text: "وبينما نتخذ خطوات معقولة لحماية معلوماتك، لا توجد وسيلة لنقل البيانات عبر الإنترنت أو تخزين المعلومات الإلكترونية آمنة تماماً بشكل كامل. وبناءً على ذلك، لا يمكننا ضمان الأمان المطلق.",
    },

    { type: "h2", text: "حقوقك" },
    {
      type: "p",
      text: "بناءً على موقعك وقوانين الخصوصية المعمول بها، قد يكون لديك الحق في:",
    },
    {
      type: "ul",
      items: [
        "الاطلاع على المعلومات الشخصية التي نحتفظ بها عنك.",
        "طلب تصحيح المعلومات غير الدقيقة أو غير المكتملة.",
        "طلب حذف معلوماتك الشخصية، وفقاً للمتطلبات القانونية المعمول بها.",
        "طلب نسخة من معلوماتك الشخصية بتنسيق إلكتروني شائع الاستخدام.",
        "الاعتراض على أنواع معينة من المعالجة أو تقييدها.",
        "سحب موافقتك في الحالات التي تستند فيها المعالجة إلى الموافقة.",
      ],
    },
    {
      type: "p",
      text: "لممارسة أي من هذه الحقوق، يرجى التواصل معنا باستخدام المعلومات الواردة أدناه. وسنقوم بالرد على طلبك ضمن الإطار الزمني الذي يقتضيه القانون المعمول به.",
    },

    { type: "h2", text: "تواصل معنا" },
    {
      type: "p",
      text: "إذا كانت لديك أي أسئلة أو مخاوف أو طلبات بخصوص سياسة الخصوصية هذه أو الطريقة التي تعالج بها سبون تك معلوماتك الشخصية، يرجى التواصل معنا:",
    },
    {
      type: "contact",
      lines: [
        { label: "البريد الإلكتروني", value: "info@spoontech.net", href: "mailto:info@spoontech.net" },
        { label: "الموقع الإلكتروني", value: "www.spoontech.net", href: "https://www.spoontech.net" },
        { label: "رقم التواصل", value: "+201500588018", href: "tel:+201500588018" },
      ],
    },
    {
      type: "p",
      text: "سنبذل قصارى جهدنا للرد على استفسارك في أسرع وقت ممكن ووفقاً لقوانين الخصوصية المعمول بها.",
    },
  ],
}

export const privacyContent = { en, ar }
