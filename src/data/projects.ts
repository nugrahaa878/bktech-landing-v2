export interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  longDescription?: string;
  client?: string;
  date?: string;
  techStack?: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    title: "KADIN UK",
    category: "Government & Institutional",
    description: "Website resmi perwakilan Kamar Dagang dan Industri Indonesia di Inggris, menjembatani kerja sama bisnis Indonesia-Inggris.",
    longDescription: "Website resmi untuk KADIN UK, perwakilan Kamar Dagang dan Industri Indonesia (KADIN) di Inggris yang menjembatani hubungan bisnis antara Indonesia dan Inggris Raya. Website menampilkan profil organisasi, berita dan kegiatan seputar kerja sama ekonomi kedua negara, serta informasi kemitraan dan keanggotaan bagi pelaku usaha. Desain mengusung palet navy dan aksen kuning emas yang menghadirkan kesan resmi, institusional, dan tepercaya, selaras dengan identitas kelembagaan KADIN.",
    client: "KADIN UK",
    date: "2025",
    techStack: ["Next.js"],
    image: "https://ik.imagekit.io/cbadwplrt/portofolio/KADIN%20UK%20-%20Portfolio%20Visual-selection.png",
    link: "https://kadin.uk/",
  },
  {
    title: "RAC Capital Management",
    category: "Financial Services",
    description: "Website korporat untuk perusahaan manajemen investasi yang fokus pada penciptaan nilai jangka panjang dan manajemen risiko.",
    longDescription: "Website korporat untuk RAC Capital Management, perusahaan manajemen investasi yang menghadirkan solusi investasi dan layanan keuangan menyeluruh dengan fokus pada penciptaan nilai jangka panjang dan manajemen risiko. Desain mengusung palet navy pekat dan aksen biru elektrik untuk membangun kesan kokoh, profesional, dan tepercaya, selaras dengan citra institusi keuangan kelas atas. Website menampilkan gambaran solusi investasi, manajemen portofolio, dan layanan wealth management bagi klien korporat maupun individu.",
    client: "RAC Capital Management",
    date: "2025",
    techStack: ["Next.js"],
    image: "https://ik.imagekit.io/cbadwplrt/portofolio/RAC%20Capital%20Management%20-%20Portfolio%20Visual-selection.png",
    link: "https://racapital.co/",
  },
  {
    title: "Jonifer Seragam",
    category: "Fashion E-Commerce",
    description: "Website marketing untuk konveksi seragam dan pakaian custom dengan estimasi harga instan dan pemesanan via WhatsApp.",
    longDescription: "Website marketing yang fokus pada konversi untuk Jonifer Seragam, konveksi yang memproduksi kaos, seragam, dan selempang custom. Website ini dibangun dengan kalkulator estimasi harga instan yang memudahkan calon pembeli mengatur jumlah dan spesifikasi sebelum memesan langsung lewat WhatsApp, sehingga alur dari tanya harga sampai order jadi lebih cepat. Foto produk yang bersih dan tampilan katalog yang sederhana menjaga fokus tetap pada produksi pakaian custom yang cepat dan berkualitas premium.",
    client: "Jonifer Seragam",
    date: "2025",
    techStack: ["Next.js"],
    image: "https://ik.imagekit.io/cbadwplrt/portofolio/jonifer.png",
    link: "http://joniferseragam.com/",
  },
  {
    title: "Clerra",
    category: "ESG Software",
    description: "Software ESG Indonesia untuk otomasi pelaporan keberlanjutan dan kepatuhan regulasi.",
    longDescription: "Website dan platform untuk Clerra, software ESG terkemuka di Indonesia yang membantu perusahaan mengotomasi pelaporan keberlanjutan dan menjaga kepatuhan terhadap POJK 51, PSPK, IFRS S1/S2, GRI, dan IDX ESG Metrics. Desain website menonjolkan positioning sebagai solusi ESG tepercaya dengan pesan yang jelas seputar kepatuhan regulasi, otomasi laporan, dan kemudahan pengelolaan data keberlanjutan bagi perusahaan di Indonesia.",
    client: "Clerra",
    date: "2025",
    techStack: ["Next.js"],
    image: "https://ik.imagekit.io/cbadwplrt/portofolio/Clerra%20Poster%20-%20Final.png",
    link: "https://www.clerra.id/",
  },
  {
    title: "Khalif Muslim",
    category: "Fashion E-Commerce",
    description: "Website marketing untuk busana muslim pria premium — koko, gamis, peci, sarung, dan aksesori.",
    longDescription: "Website marketing dan katalog produk untuk Khalif Muslim, brand busana muslim pria premium yang menghadirkan koko, gamis, peci, sarung, dan aksesori dengan kesan syar'i, berwibawa, dan mewah. Desain mengusung palet hitam pekat, krem hangat, dan aksen emas untuk membangun kesan eksklusif, dipadukan tipografi serif elegan dan fotografi produk yang bersih. Pemesanan dilakukan langsung lewat WhatsApp untuk pengalaman belanja yang personal dan cepat.",
    client: "Khalif Muslim",
    date: "2025",
    techStack: ["Next.js"],
    image: "https://ik.imagekit.io/cbadwplrt/portofolio/Khalif%20Muslim%20-%20Portfolio%20Visual-selection.png",
    link: "https://fashion-v1.bktech.id/",
  },
  {
    title: "Fu Wang",
    category: "Entertainment & Leisure",
    description: "Website reservasi dan aplikasi mobile Android & iOS untuk cafe mahjong premium dengan fasilitas VIP.",
    longDescription: "Website marketing dan reservasi beserta aplikasi mobile Android & iOS untuk Fu Wang, cafe mahjong elektrik premium yang menawarkan ruangan VIP eksklusif untuk kenyamanan dan privasi bersama teman-teman. Website menampilkan menu & harga, alur reservasi online, dan galeri suasana cafe, sementara aplikasi mobile pendampingnya memudahkan pelanggan mencari teman mabar langsung dari genggaman. Desain mengusung nuansa premium dan eksklusif yang selaras dengan pengalaman bermain mahjong kelas atas.",
    client: "Fu Wang",
    date: "2025",
    techStack: ["HTML", "CSS", "JavaScript", "Android", "iOS"],
    image: "https://ik.imagekit.io/cbadwplrt/portofolio/Fu%20Wang%20-%20Portfolio%20Visual-selection.png",
    link: "https://fuwang.id/",
  },

  {
    title: "Elok Pelaminan",
    category: "Wedding & Event Services",
    description: "Website marketing untuk jasa dekorasi pelaminan dan sewa busana pernikahan adat Minang & modern di Bukittinggi.",
    longDescription: "Website marketing untuk Elok Pelaminan, penyedia jasa dekorasi pelaminan dan sewa busana pernikahan adat Minangkabau maupun modern yang melayani Bukittinggi, Padang Panjang, Payakumbuh, dan sekitarnya. Website menampilkan galeri portofolio berisi belasan foto hasil dekorasi dari berbagai gaya — adat Minang, modern gold, tenda outdoor, hingga minimalis — serta testimoni pelanggan yang menonjolkan kerapian, ketepatan waktu, dan kualitas eksekusi desain. Konsultasi dan pemesanan dilakukan langsung lewat WhatsApp untuk pengalaman yang responsif dan personal.",
    client: "Elok Pelaminan",
    date: "2025",
    techStack: ["Next.js"],
    image: "https://ik.imagekit.io/cbadwplrt/portofolio/Elok%20Pelaminan%20-%20Portfolio%20Visual-selection.png",
    link: "https://pelaminan-v1.bktech.id/",
  },
  {
    title: "Agratara",
    category: "AgriTech Marketplace",
    description: "Platform yang menghubungkan petani, peternak, dan pedagang pasar secara langsung — harga adil, pasokan stabil, tanpa tengkulak.",
    longDescription: "Website marketing dan platform untuk Agratara, penggagas kedaulatan pangan yang menghubungkan petani, peternak, dan pedagang pasar secara langsung tanpa perantara tengkulak. Website menekankan misi harga adil bagi petani dan pasokan yang stabil bagi pedagang, dengan desain bernuansa hijau forest dan teal yang menghadirkan kesan segar, terpercaya, dan membumi. Fotografi yang menonjolkan alam dan hasil bumi memperkuat narasi kesejahteraan bangsa melalui rantai pasok pangan yang lebih transparan.",
    client: "Agratara",
    date: "2025",
    techStack: ["Next.js"],
    image: "https://ik.imagekit.io/cbadwplrt/portofolio/Agratara%20-%20Portfolio%20Visual-selection.png",
    link: "https://agratara.netlify.app/",
  },
  {
    title: "Atelier Noire",
    category: "Fashion E-Commerce",
    description: "Pengalaman e-commerce haute couture mewah untuk maison fashion heritage yang mengkhususkan diri pada busana handmade edisi terbatas.",
    longDescription: "Platform e-commerce fashion mewah untuk Atelier Noire, maison haute couture dengan keahlian tinggi yang menghadirkan koleksi artisanal edisi terbatas — mantel tailored, gaun malam, dan busana couture, dibuat tangan di Florence. Etalase menonjolkan mantel tailored, gaun malam, dan busana couture bespoke yang diproduksi secara sengaja dalam edisi terbatas. Didesain dengan estetika minimalis dan elegan, tipografi yang halus, fotografi produk berkualitas tinggi, serta ruang kosong yang lapang untuk menghadirkan kesan eksklusif dan kemewahan yang bersahaja. Dilengkapi pengiriman global gratis dan proses pengembalian yang mudah.",
    client: "Atelier Noire",
    date: "2025",
    techStack: ["Next.js"],
    image: "https://ik.imagekit.io/cbadwplrt/portofolio/Atelier%20Noire%20-%20Portfolio%20Visual-selection.png",
    link: "https://fashion.bktech.id/",
  },
  {
    title: "Fanlee Store",
    category: "Game Marketplace",
    description: "Platform e-commerce lengkap untuk jual-beli item game, voucher, dan top up diamond secara online.",
    longDescription: "Platform e-commerce lengkap untuk penjualan item game, voucher, dan top up mata uang digital, dibangun dengan Laravel. Menampilkan nuansa gaming bertema gelap dengan aksen tosca, bilah navigasi pencarian global di bagian atas beserta tombol lacak pesanan, carousel banner promosi utama yang menonjolkan artwork game, grid produk yang terkategori untuk Top Up Game dan Voucher digital dengan kartu item dari berbagai game populer, serta antarmuka checkout keranjang belanja yang aman.",
    client: "Fanlee Store",
    date: "2025",
    techStack: ["Laravel"],
    image: "https://ik.imagekit.io/cbadwplrt/portofolio/Fanlee%20Store%20-%20Portfolio%20Visual-selection.png",
    link: "https://fanleestore.id/",
  },
];
