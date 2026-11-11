export type Language = 'ar' | 'en';
export type Copy = { ar: string; en: string };
const c = (ar: string, en: string): Copy => ({ ar, en });

export const data = {
  shop: c('الأسطى باربر', 'EL OSTA BARBER'),
  shopFirst: c('الأسطى', 'EL OSTA'), shopSecond: c('باربر', 'BARBER'),
  clients: c('عميل شيك', 'fresh-looking clients'), openMenu: c('فتح القائمة', 'Open menu'), closeMenu: c('إغلاق القائمة', 'Close menu'),
  tagline: c('شياكة تبدأ من الكرسي', 'Sharp starts here'),
  intro: c('قصّة مظبوطة. دقن على أصولها. وشياكة تليق بيك.', 'A clean cut. A proper shave. A look that’s all you.'),
  eyebrow: c('مش مجرد حلاقة. دي أصول.', 'NOT JUST A CUT. A CRAFT.'),
  book: c('احجز كرسيك', 'Book your chair'),
  discover: c('شوف خدماتنا', 'Explore services'),
  nav: [c('الخدمات', 'Services'), c('الأسطوات', 'The barbers'), c('احجز دلوقتي', 'Book now')],
  demo: c('موقع تجريبي — لا يتم حجز مواعيد حقيقية', 'Demo website: no real appointments are booked.'),
  heroFacts: [c('حلاقة على أصولها', 'Cuts with character'), c('أسطوات مش هواة', 'Masters, not amateurs'), c('شياكة من الآخر', 'Look your sharpest')],
  serviceEyebrow: c('اختار لوكك', 'FIND YOUR LOOK'),
  serviceTitle: c('خدمات على أصولها', 'THE FULL TREATMENT'),
  serviceIntro: c('من قصّة سريعة لباقة كاملة — سيب الشياكة علينا.', 'From a fresh trim to the full works. We’ve got you.'),
  categories: [c('قص شعر', 'Haircuts'), c('دقن وحلاقة', 'Beard & shave'), c('عناية', 'Grooming'), c('باقات', 'Packages')],
  services: [
    { id: 'hair', category: 0, name: c('قص شعر', 'Signature haircut'), description: c('قصّة على مزاجك، بتفاصيل مظبوطة وتشطيب نضيف.', 'Your style, expertly cut and finished to perfection.'), duration: 30, price: 200, icon: 'scissors', badge: c('الأكثر طلبًا', 'MOST POPULAR') },
    { id: 'kids', category: 0, name: c('قص شعر أطفال', 'Little gentleman’s cut'), description: c('قصّة شيك للأسطى الصغير، براحة ومن غير زعل.', 'Big style for little gents. Patient, gentle, and fun.'), duration: 25, price: 150, icon: 'comb', badge: c('للأسطى الصغير', 'LITTLE GENTS') },
    { id: 'beard', category: 1, name: c('تحديد وتهذيب دقن', 'Beard trim & shape-up'), description: c('دقن مترتبة، خطوط نضيفة، ولوك يكمل شياكتك.', 'Clean lines and a sculpted beard that completes your look.'), duration: 20, price: 120, icon: 'razor', badge: c('تفاصيل تفرق', 'CLEAN LINES') },
    { id: 'shave', category: 1, name: c('حلاقة فوطة سخنة', 'Hot-towel razor shave'), description: c('فوطة سخنة وحلاقة موس كلاسيك على أصولها.', 'An old-school straight-razor shave with a soothing hot towel.'), duration: 30, price: 180, icon: 'razor', badge: c('راحة على أصولها', 'OLD-SCHOOL COOL') },
    { id: 'mask', category: 2, name: c('ماسك وتنضيف بشرة', 'Fresh-face treatment'), description: c('تنضيف وماسك يخلّوا وشك فريش ومستعد لليوم.', 'A deep cleanse and refreshing mask for a fresh start.'), duration: 20, price: 150, icon: 'sparkle', badge: c('انتعاش مضمون', 'FRESH START') },
    { id: 'groom', category: 3, name: c('باقة العريس', 'The groom’s package'), description: c('شعر، دقن، وعناية كاملة عشان تطلع نجم الليلة.', 'Hair, beard, and a full face treatment for your big day.'), duration: 90, price: 600, icon: 'crown', badge: c('ليلتك الكبيرة', 'THE BIG DAY') },
  ],
  minute: c('دقيقة', 'min'), add: c('اختار الخدمة', 'Choose service'), selected: c('تم الاختيار', 'Selected'),
  barberEyebrow: c('الأيد الشاطرة', 'MEET THE MASTERS'), barberTitle: c('أسطوات الشياكة', 'YOUR CHAIR. YOUR BARBER.'),
  barberIntro: c('خبرة في الإيد، وذوق في كل تفصيلة.', 'Steady hands. A sharp eye. Pride in every detail.'),
  barbers: [
    { id: 'omar', name: c('عمر', 'Omar'), initials: c('ع', 'O'), specialty: c('أسطى الفيد والتدريج', 'Fade specialist'), rating: 4.9, tone: 'red' },
    { id: 'hassan', name: c('حسن', 'Hassan'), initials: c('ح', 'H'), specialty: c('ملك القصّات الكلاسيك', 'Classic-cut master'), rating: 4.8, tone: 'blue' },
    { id: 'youssef', name: c('يوسف', 'Youssef'), initials: c('ي', 'Y'), specialty: c('فنان تصميم الدقن', 'Beard-design expert'), rating: 4.9, tone: 'gold' },
  ],
  bookingEyebrow: c('كرسيك مستنيك', 'A SEAT WITH YOUR NAME ON IT'), bookingTitle: c('احجز. اقعد. اتشيّك.', 'BOOK. SIT. LOOK SHARP.'),
  steps: [c('الخدمات', 'Services'), c('الحلاق', 'Barber'), c('الموعد', 'Date & time'), c('بياناتك', 'Your details')],
  chooseServices: c('هنظبطلك إيه النهارده؟', 'What are we doing today?'), chooseBarber: c('اختار الأسطى بتاعك', 'Pick your barber'), chooseDate: c('اختار يومك ووقتك', 'Find your perfect time'), detailsTitle: c('آخر خطوة وكرسيك جاهز', 'One last step to your chair'),
  multiple: c('ممكن تختار أكتر من خدمة', 'Choose one or more services'), any: c('أي حلاق', 'Any barber'), anyNote: c('كلهم أسطوات، سيبها علينا', 'You’re in good hands with any of us'),
  next: c('الخطوة الجاية', 'Next step'), back: c('رجوع', 'Back'), submit: c('ابعت طلب الحجز', 'Send booking request'),
  name: c('الاسم', 'Name'), phone: c('رقم الموبايل', 'Phone number'), notes: c('ملاحظات (اختياري)', 'Notes (optional)'), namePlaceholder: c('اسمك الكريم', 'Your full name'), phonePlaceholder: c('٠١xxxxxxxxx', '01xxxxxxxxx'), notesPlaceholder: c('أي تفاصيل تحب الأسطى يعرفها؟', 'Anything your barber should know?'),
  summary: c('حجزك من الآخر', 'YOUR BOOKING'), total: c('الإجمالي', 'Total'), serviceError: c('اختار خدمة واحدة على الأقل', 'Choose at least one service.'), dateError: c('اختار يوم ووقت متاح', 'Choose a date and an available time.'), nameError: c('اكتب اسمك (حرفين على الأقل)', 'Enter a name of at least two characters.'), phoneError: c('اكتب رقم موبايل مصري صحيح من ١١ رقم', 'Enter a valid 11-digit Egyptian mobile number.'),
  success: c('وصلنا طلبك، هنكلمك نأكد الموعد', 'Request received! We’ll call to confirm your appointment.'), successTitle: c('تمام يا أسطى!', 'LOOKING GOOD!'), again: c('طلب جديد', 'Make another request'),
  waitEyebrow: c('معدّي من غير حجز؟', 'JUST WALKING IN?'), waitTitle: c('كرسيك قرب يفضى', 'YOUR CHAIR IS ALMOST READY'), waitDescription: c('وقت الانتظار المتوقع دلوقتي', 'Current estimated waiting time'), live: c('تقدير تجريبي', 'Demo estimate'), queue: c('اتفضل، القعدة تحلى بيك.', 'Come on in. We’ll make room for you.'),
  loyaltyEyebrow: c('شياكتك ليها مكافأة', 'GOOD LOOKS GET REWARDED'), loyaltyTitle: c('كل قصّة تقرّبك من هدية', 'FRESH CUTS. FREE CUT.'), loyaltyDescription: c('اجمع ٥ أختام، والحلاقة السادسة علينا.', 'Collect 5 stamps. Your sixth haircut is on us.'), stamp: c('ختم', 'Stamp'), free: c('مجّانًا', 'FREE'), loyaltyDemo: c('كارت تجريبي — جرّب تضغط على الأختام', 'Demo stamp card'), reward: c('مبروك! الحلاقة السادسة مجانًا', 'You earned it! Your sixth haircut is free.'),
  visit: c('نوّرنا في المحل', 'DROP BY THE SHOP'), address: c('شارع الشياكة، المعادي، القاهرة', 'El Shiyaka Street, Maadi, Cairo'), fictional: c('عنوان تجريبي لمحل خيالي', 'Illustrative address for a fictional shop'), map: c('المعادي، القاهرة', 'MAADI, CAIRO'), hoursTitle: c('مواعيدنا', 'OPENING HOURS'),
  hours: [{ days: c('السبت — الخميس', 'Saturday — Thursday'), time: c('١٠ صباحًا — ١١ مساءً', '10 AM — 11 PM') }, { days: c('الجمعة', 'Friday'), time: c('٢ ظهرًا — ١١ مساءً', '2 PM — 11 PM') }],
  footer: c('صنعة قديمة. شياكة جديدة.', 'OLD-SCHOOL CRAFT. NEW-SCHOOL STYLE.'), copyright: c('الأسطى باربر — كل الشياكة محفوظة', 'El Osta Barber — All styles reserved'),
  marquee: [c('قصّة مظبوطة', 'SHARP CUTS'), c('دقن على أصولها', 'CLEAN SHAVES'), c('أسطوات الشياكة', 'MASTER BARBERS'), c('شياكة من الآخر', 'GOOD LOOKS ONLY')],
  slots: ['10:00', '10:30', '11:00', '11:30', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'],
  disabledSlots: ['11:00', '13:00', '16:00'],
};

export function number(value: number | string, lang: Language) { return lang === 'ar' ? String(value).replace(/\d/g, d => ('٠١٢٣٤٥٦٧٨٩'[Number(d)] ?? d)) : String(value); }
export function price(value: number, lang: Language) { return lang === 'ar' ? `${number(value, lang)} ج.م` : `EGP ${value}`; }
export function normalizePhone(value: string) { return value.replace(/[٠-٩]/g, d => String('٠١٢٣٤٥٦٧٨٩'.indexOf(d))).replace(/[\s-]/g, ''); }
export function validPhone(value: string) { return /^01[0125]\d{8}$/.test(normalizePhone(value)); }
export function nextDays(from: Date) { return Array.from({ length: 14 }, (_, i) => { const d = new Date(from); d.setDate(d.getDate() + i); return d; }); }
export function isAvailable(slot: string) { return data.slots.includes(slot) && !data.disabledSlots.includes(slot); }
export function earnedFreeCut(stamps: number) { return stamps >= 6; }