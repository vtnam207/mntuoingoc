(function(){
  "use strict";

  // Bảo mật: mọi nội dung động đều dựng bằng createElement + textContent,
  // không dùng innerHTML/eval, không gửi dữ liệu đi đâu, không nhận chữ tự do.
  function el(tag, cls, text){
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = String(text);
    return n;
  }

  var AGES = Object.freeze([
    { id:"3-4", label:"3–4", unit:"tuổi", lv:"Mầm", color:"c-sky", tag:"Lớp Mầm",
      title:"Khám phá bằng giác quan và lời nói",
      intro:"Con học qua chạm, nhìn, nghe và bắt chước. Vốn từ tăng nhanh mỗi tuần, và câu hỏi \"tại sao\" bắt đầu xuất hiện.",
      theory:[["Nhận thức · Piaget","Giai đoạn tiền thao tác: con nghĩ bằng hình ảnh và trò chơi đóng vai, thường nhìn mọi việc từ góc của mình."],
              ["Tâm lý – xã hội · Erikson","Chủ động hay e ngại: con cần được tự thử, tự chọn, và được khen vì đã cố gắng."],
              ["Mức tư duy · Bloom","Ghi nhớ và Hiểu: gọi tên, nhận ra, mô tả đơn giản."]],
      learn:["Màu sắc, hình khối, con vật, đồ vật quen thuộc","Đếm và nhận mặt số đến 5","Nghe kể chuyện ngắn, đọc thơ, hát vận động","Xé dán, nặn, xâu hạt để luyện tay"],
      parent:["Hỏi \"Con thấy gì?\" thay vì \"Cái này là gì?\"","Đọc sách cùng con 10 phút trước giờ ngủ","Cho con tự chọn giữa hai lựa chọn: áo xanh hay áo đỏ","Khen việc con cố gắng, không chỉ khen kết quả"],
      tip:"Chưa cần dạy viết. Bàn tay con đang tập cầm, nắm, vặn, đó là nền cho cầm bút sau này.",
      acts:[["Giác quan",["Tìm đồ vật giấu trong khay gạo","Đoán đồ vật bằng tay khi bịt mắt"]],["Vận động",["Nhảy lò cò đến thẻ màu","Mang đồ chơi về đúng giỏ"]],["Ngôn ngữ",["Bắt chước tiếng con vật","Kể lại tranh bằng một câu"]],["Tự phục vụ",["Tự cất dép","Tự cầm thìa ăn"]]],
      progs:[["Khám phá màu và hình","c-sky","Mầm","Màu"],["Bé tập nói song ngữ","c-red","Mầm","Hi!"],["Vận động vui","c-sun","Mầm","Nhảy"]] },
    { id:"4-5", label:"4–5", unit:"tuổi", lv:"Chồi", color:"c-leaf", tag:"Lớp Chồi",
      title:"Ngôn ngữ bùng nổ, tò mò không ngừng",
      intro:"Con nói thành câu dài, thích kể chuyện và đặt nhiều câu hỏi. Đây là lúc tốt để làm quen chữ và số qua trò chơi.",
      theory:[["Nhận thức · Piaget","Vẫn ở giai đoạn tiền thao tác, nhưng con bắt đầu phân loại theo một tiêu chí và nhận ra quy luật đơn giản."],
              ["Tâm lý – xã hội · Erikson","Chủ động: con muốn tự lên kế hoạch cho trò chơi và rủ bạn cùng chơi."],
              ["Mức tư duy · Bloom","Hiểu và Vận dụng: giải thích, so sánh, dùng điều đã biết vào việc mới."]],
      learn:["Đếm và so sánh trong phạm vi 10","Làm quen chữ cái tiếng Việt qua tranh","Kể lại câu chuyện theo thứ tự tranh","Nghe – nói tiếng Anh qua bài hát và trò chơi"],
      parent:["Cùng đếm khi đi chợ, khi xếp bát đũa","Chơi bingo chữ cái thay vì bắt con chép chữ","Hỏi \"Rồi sau đó thế nào?\" khi con kể chuyện","Giao cho con một việc nhà nhỏ cố định"],
      tip:"Con có thể đếm đến 20 nhưng chưa hiểu \"7 cái kẹo\" là bao nhiêu. Hãy đếm đồ vật thật nhiều hơn đếm miệng.",
      acts:[["Toán",["Đếm nắp chai rồi đặt thẻ số","So sánh hai nhóm: bên nào nhiều hơn?"]],["Chữ",["Tìm chữ cái trên bao bì","Nặn chữ bằng đất"]],["Tư duy",["Xếp hạt theo quy luật màu","Ghép tranh 12–24 mảnh"]],["Tiếng Anh",["Hát và làm động tác","Simon says"]]],
      progs:[["Toán khám phá","c-leaf","Chồi","1 2 3"],["Làm quen chữ cái","c-sun","Chồi","A B"],["English Time","c-red","Chồi","ABC"]] },
    { id:"5-6", label:"5–6", unit:"tuổi", lv:"Lá", color:"c-sun", tag:"Lớp Lá · Tiền tiểu học",
      title:"Sẵn sàng vào lớp 1",
      intro:"Năm cuối mầm non. Mục tiêu không phải biết đọc biết viết thật sớm, mà là sẵn sàng về tư thế, thói quen, khả năng nghe hiểu và tự lập.",
      theory:[["Nhận thức · Piaget","Cuối giai đoạn tiền thao tác, chuẩn bị chuyển sang tư duy với sự vật cụ thể."],
              ["Tâm lý – xã hội · Erikson","Chuyển dần sang giai đoạn Siêng năng: con muốn làm được việc \"như người lớn\" và được ghi nhận."],
              ["Mức tư duy · Bloom","Vận dụng và Phân tích: tìm quy luật, tách gộp, giải thích cách làm."]],
      learn:["Tách – gộp và cộng trừ trong phạm vi 10","Nhận biết chữ cái, âm đầu và vần đơn giản","Tô nét cơ bản, ngồi và cầm bút đúng","Âm của chữ cái tiếng Anh (Phonics Stage 1)"],
      parent:["Sắp một góc học tập cố định, gọn gàng","Tập giờ giấc giống lịch tiểu học từ hè","Cho con tự soạn cặp theo bảng hình","Không ép viết nhiều; 10–15 phút mỗi ngày là đủ"],
      tip:"Ngồi tập trung 15–20 phút và làm theo hướng dẫn nhiều bước quan trọng không kém việc biết chữ.",
      acts:[["Toán",["Ngôi nhà số: tách 6 thành mấy và mấy?","Đi chợ bằng xu giấy"]],["Tiếng Việt",["Vỗ tay theo tiếng","Săn chữ cái trong truyện"]],["Nề nếp",["Bảng sao buổi tối","Tự soạn cặp"]],["Tiếng Anh",["Nghe âm, chỉ chữ","Đọc từ CVC đầu tiên"]]],
      progs:[["Tiền tiểu học: Toán","c-leaf","Lá","+ −"],["Tiền tiểu học: Tiếng Việt","c-sun","Lá","Vần"],["Phonics Starter","c-red","Lá","s a t"]] },
    { id:"l1", label:"Lớp 1", unit:"6–7 tuổi", lv:"Lớp 1", color:"c-violet", tag:"Tiểu học · Lớp 1",
      title:"Đọc, viết và phép tính đầu tiên",
      intro:"Năm học nhiều thay đổi nhất. Con chuyển từ chơi sang học có giờ giấc, từ đánh vần sang đọc trơn.",
      theory:[["Nhận thức · Piaget","Bắt đầu giai đoạn thao tác cụ thể: lập luận được khi có đồ vật thật trước mặt."],
              ["Tâm lý – xã hội · Erikson","Siêng năng hay tự ti: thành công nhỏ mỗi ngày giúp con tin vào bản thân."],
              ["Mức tư duy · Bloom","Vận dụng và Phân tích."]],
      learn:["Ghép vần, đọc trơn câu và đoạn ngắn","Viết chữ thường cỡ nhỡ theo ô li","Cộng trừ trong phạm vi 100 không nhớ","Phonics Stage 2–3: từ CVC, âm ghép"],
      parent:["Nghe con đọc to 10 phút mỗi tối","Khen sự tiến bộ so với chính con hôm qua","Giữ giờ ngủ đều đặn","Hỏi \"Hôm nay con thích nhất điều gì?\" thay vì \"Hôm nay được mấy điểm?\""],
      tip:"Nếu con đọc được nhưng tính toán chật vật, hãy quay lại bậc \"số lượng và so sánh\" trong lộ trình Toán.",
      acts:[["Đọc",["Đọc nối tiếp cùng ba mẹ","Truyện theo vần đã học"]],["Toán",["Trò cửa hàng bách hóa","Cộng trừ với que tính"]],["Viết",["Viết thiệp sinh nhật","Viết tên đồ vật lên giấy dán"]],["Tiếng Anh",["Đọc thẻ từ CVC","Ghép từ bằng chữ nam châm"]]],
      progs:[["Toán lớp 1","c-leaf","Lớp 1","100"],["Đọc trơn Tiếng Việt","c-sun","Lớp 1","Đọc"],["Phonics Stage 2–3","c-red","Lớp 1","ship"]] },
    { id:"l23", label:"Lớp 2–3", unit:"7–9 tuổi", lv:"Lớp 2–3", color:"c-red", tag:"Tiểu học · Lớp 2–3",
      title:"Đọc hiểu và tư duy có lý do",
      intro:"Con đọc để hiểu thay vì đọc để giải mã. Toán chuyển sang bài có lời văn, đòi hỏi con biết tóm tắt và chọn phép tính.",
      theory:[["Nhận thức · Piaget","Thao tác cụ thể: phân loại nhiều tiêu chí, sắp xếp, suy luận bắc cầu."],
              ["Tâm lý – xã hội · Erikson","Siêng năng: con thích làm dự án, sưu tầm, thi đua."],
              ["Mức tư duy · Bloom","Phân tích và Đánh giá."]],
      learn:["Bảng nhân chia, toán có lời văn hai bước","Đo lường: thời gian, độ dài, khối lượng, tiền","Đọc hiểu đoạn văn, viết đoạn 4–5 câu","Phonics Stage 4–6, đọc truyện ngắn tiếng Anh"],
      parent:["Cho con giải thích cách làm bài cho ba mẹ nghe","Đặt mục tiêu đọc sách theo tháng","Giao một việc nhà có trách nhiệm cả tuần","Hỏi gợi ý thay vì đưa đáp án"],
      tip:"Khi con sai bài toán có lời văn, thường lỗi nằm ở bước đọc hiểu đề, không phải ở phép tính.",
      acts:[["Toán",["Vẽ sơ đồ tóm tắt đề","Đo và ghi chép chiều cao cây"]],["Đọc",["Nhật ký đọc sách","Kể lại truyện theo 3 phần"]],["Tư duy",["Cờ caro, sudoku 4×4","Dự án nhỏ: làm lịch tháng"]],["Tiếng Anh",["Đọc truyện theo cấp độ","Viết câu về sở thích"]]],
      progs:[["Toán tư duy","c-leaf","Lớp 2–3","× ÷"],["Đọc hiểu và viết đoạn","c-sun","Lớp 2–3","Viết"],["English Readers","c-red","Lớp 2–3","Read"]] },
    { id:"l45", label:"Lớp 4–5", unit:"9–11 tuổi", lv:"Lớp 4–5", color:"c-sky", tag:"Tiểu học · Lớp 4–5",
      title:"Tự học và lập luận",
      intro:"Con đủ lớn để tự lên kế hoạch, ghi chép và đánh giá bài của mình. Vai trò của ba mẹ chuyển từ \"kèm\" sang \"đồng hành\".",
      theory:[["Nhận thức · Piaget","Cuối thao tác cụ thể, bắt đầu nghĩ trừu tượng và đặt giả thuyết."],
              ["Tâm lý – xã hội · Erikson","Siêng năng: cần thấy nỗ lực của mình mang lại kết quả rõ ràng."],
              ["Mức tư duy · Bloom","Đánh giá và Sáng tạo."]],
      learn:["Phân số, số thập phân, chu vi và diện tích","Viết bài văn có bố cục mở – thân – kết","Đọc sách tiếng Anh ngắn, viết đoạn văn","Lập kế hoạch tuần, ghi chép, quản lý thời gian màn hình"],
      parent:["Cùng con lập kế hoạch học theo tuần","Để con tự kiểm tra bài trước khi ba mẹ xem","Trò chuyện về sách con đọc như hai người bạn","Thống nhất quy tắc dùng thiết bị trong nhà"],
      tip:"Khả năng tự sửa lỗi quan trọng hơn điểm số. Hãy khen khi con tự tìm ra chỗ sai.",
      acts:[["Toán",["Nấu ăn theo công thức chia đôi","Tính diện tích phòng ngủ"]],["Văn",["Viết bài nhận xét về cuốn sách","Phỏng vấn ông bà rồi viết lại"]],["Tư duy",["Lập ngân sách cho buổi dã ngoại","Thiết kế trò chơi bàn cờ"]],["Tiếng Anh",["Câu lạc bộ đọc","Thuyết trình 1 phút"]]],
      progs:[["Toán nâng cao","c-leaf","Lớp 4–5","½"],["Văn và kỹ năng viết","c-sun","Lớp 4–5","Văn"],["English Club","c-red","Lớp 4–5","Talk"]] }
  ]);
  var ACT_COLORS = ["c-sky","c-leaf","c-sun","c-violet"];
  var TAB_FOR_PROG = ["toan","tieng-viet","tieng-anh"];

  var ageBar = document.getElementById("ageBar");
  var ageView = document.getElementById("ageView");
  var lvRow = document.getElementById("lvRow");
  var currentAge = "5-6";
  try { var saved = localStorage.getItem("tn-age"); if (saved && AGES.some(function(a){return a.id===saved;})) currentAge = saved; } catch(e){}

  AGES.forEach(function(a){
    var b = el("button","age " + a.color);
    b.type = "button";
    b.dataset.age = a.id;
    b.appendChild(el("b",null,a.label));
    b.appendChild(el("small",null,a.unit));
    b.addEventListener("click", function(){ renderAge(a.id); });
    ageBar.appendChild(b);

    var s = el("button","lv " + a.color);
    s.type = "button";
    s.appendChild(el("b",null,a.lv));
    s.appendChild(el("small",null,a.id.charAt(0)==="l" ? a.unit : a.label + " tuổi"));
    s.addEventListener("click", function(){ renderAge(a.id); showTab("do-tuoi", true); });
    lvRow.appendChild(s);
  });

  function listCard(title, items){
    var box = el("div","card");
    box.appendChild(el("h4",null,title));
    var ul = el("ul","list");
    items.forEach(function(t){ ul.appendChild(el("li",null,t)); });
    box.appendChild(ul);
    return box;
  }

  function renderAge(id){
    var a = AGES.find(function(x){return x.id===id;}) || AGES[2];
    currentAge = a.id;
    try { localStorage.setItem("tn-age", a.id); } catch(e){}
    Array.prototype.forEach.call(ageBar.querySelectorAll(".age"), function(b){
      b.setAttribute("aria-pressed", String(b.dataset.age===a.id));
    });
    ageView.textContent = "";

    var head = el("div","card " + a.color);
    var hero = el("div","age-hero");
    var badge = el("div","badge");
    badge.appendChild(el("b",null,a.label));
    badge.appendChild(el("span",null,a.unit));
    hero.appendChild(badge);
    var ht = el("div");
    ht.appendChild(el("span","tag",a.tag));
    ht.appendChild(el("h3",null,a.title));
    ht.appendChild(el("p",null,a.intro));
    hero.appendChild(ht);
    head.appendChild(hero);
    head.appendChild(el("h4",null,"Góc phát triển"));
    var th = el("div","theory");
    a.theory.forEach(function(t){
      var d = el("div");
      d.appendChild(el("span","k",t[0]));
      d.appendChild(el("span",null,t[1]));
      th.appendChild(d);
    });
    head.appendChild(th);
    ageView.appendChild(head);

    var g = el("div","grid-2");
    g.appendChild(listCard("Nội dung con học", a.learn));
    g.appendChild(listCard("Ba mẹ đồng hành thế nào", a.parent));
    ageView.appendChild(g);

    var pen = el("div","pen");
    pen.appendChild(el("span","hand","Cô giáo dặn"));
    pen.appendChild(document.createTextNode(a.tip));
    ageView.appendChild(pen);

    var actBox = el("div","card");
    actBox.appendChild(el("h3",null,"Gợi ý trò chơi tại nhà"));
    var acts = el("div","acts");
    a.acts.forEach(function(g2, i){
      var d = el("div","act " + ACT_COLORS[i % ACT_COLORS.length]);
      d.appendChild(el("b",null,g2[0]));
      var ul = el("ul");
      g2[1].forEach(function(t){ ul.appendChild(el("li",null,t)); });
      d.appendChild(ul);
      acts.appendChild(d);
    });
    actBox.appendChild(acts);
    ageView.appendChild(actBox);

    var progBox = el("div","card");
    progBox.appendChild(el("h3",null,"Lớp học phù hợp tại Tuổi Ngọc"));
    var pg = el("div","grid-3");
    a.progs.forEach(function(p, i){
      var c = el("div","prog " + p[1]);
      c.appendChild(el("div","art",p[3]));
      var body = el("div","body");
      body.appendChild(el("b",null,p[0]));
      body.appendChild(el("small",null,"Dành cho " + p[2] + " · Lịch học đang cập nhật"));
      var go = el("button","go","Xem lộ trình môn này →");
      go.type = "button";
      go.addEventListener("click", function(){ showTab(TAB_FOR_PROG[i], true); });
      body.appendChild(go);
      c.appendChild(body);
      pg.appendChild(c);
    });
    progBox.appendChild(pg);
    ageView.appendChild(progBox);
  }

  // Tabs + hash routing (chỉ chấp nhận tên tab trong danh sách cố định)
  var TABS = ["do-tuoi","toan","tieng-viet","tieng-anh","tu-duy","hanh-vi","tai-nguyen"];
  var tabBtns = document.querySelectorAll(".tab");
  var shell = document.getElementById("tabsShell");
  function showTab(name, scroll){
    if (TABS.indexOf(name) === -1) name = "do-tuoi";
    TABS.forEach(function(t){ document.getElementById(t).hidden = (t !== name); });
    Array.prototype.forEach.call(tabBtns, function(b){
      var on = b.dataset.tab === name;
      b.setAttribute("aria-selected", String(on));
      b.tabIndex = on ? 0 : -1;
      if (on) { try { b.scrollIntoView({block:"nearest", inline:"center"}); } catch(e){} }
    });
    if (location.hash.slice(1) !== name) {
      try { history.replaceState(null, "", "#" + name); } catch(e){}
    }
    if (scroll) {
      try { window.scrollTo({ top: shell.offsetTop - 2, behavior: "smooth" }); } catch(e){ window.scrollTo(0, shell.offsetTop); }
    }
  }
  Array.prototype.forEach.call(tabBtns, function(b, i){
    b.addEventListener("click", function(){ showTab(b.dataset.tab, false); });
    b.addEventListener("keydown", function(e){
      var d = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
      if (!d) return;
      e.preventDefault();
      var next = tabBtns[(i + d + tabBtns.length) % tabBtns.length];
      next.focus(); showTab(next.dataset.tab, false);
    });
  });
  window.addEventListener("hashchange", function(){
    var h = location.hash.slice(1);
    if (h === "lien-he") return;
    showTab(h, false);
  });
  window.addEventListener("scroll", function(){
    shell.classList.toggle("stuck", shell.getBoundingClientRect().top <= 1);
  }, { passive:true });

  var initial = location.hash.slice(1);
  renderAge(currentAge);
  showTab(TABS.indexOf(initial) > -1 ? initial : "do-tuoi", false);

  // Trợ lý hỏi nhanh: câu hỏi và câu trả lời cố định
  var FAQ = Object.freeze([
    ["Con mấy tuổi thì vào lớp nào?","Lớp Mầm cho bé 3–4 tuổi, lớp Chồi 4–5 tuổi, lớp Lá 5–6 tuổi (tiền tiểu học). Từ lớp 1 đến lớp 5, Tuổi Ngọc có các lớp bổ trợ Toán, Tiếng Việt và Tiếng Anh. Ba mẹ bấm vào tab \"Theo độ tuổi\" để xem chi tiết."],
    ["Lộ trình Toán gồm những gì?","5 bậc: (1) Nhận mặt số → (2) Đếm và thứ tự → (3) Số lượng và so sánh, bậc quan trọng nhất → (4) Tách gộp, cộng trừ → (5) Giải toán và mở rộng ở tiểu học."],
    ["Khi nào con nên học Phonics?","Thường từ lớp Lá, sau khi con đã nghe và nói được một vốn từ tiếng Anh nhất định. Phần nghe – nói (Stage 0) đi trước và kéo dài suốt lộ trình."],
    ["Con có cần biết chữ trước khi vào lớp 1?","Làm quen chữ qua trò chơi là tốt. Quan trọng hơn là con ngồi đúng tư thế, tập trung được 15–20 phút, tự phục vụ và làm theo hướng dẫn."],
    ["Học phí và lịch học thế nào?","Thông tin học phí và lịch học đang được cập nhật. Ba mẹ vui lòng xem mục \"Liên hệ tư vấn\" ở cuối trang."],
    ["Tài nguyên miễn phí có những gì?","Phiếu tập tô số, tô màu chữ cái, phiếu đếm và cộng trừ, thẻ từ tiếng Anh, bảng sao nề nếp. Các tài nguyên đang được biên soạn và sẽ mở dần."]
  ]);
  var fab = document.getElementById("fab"), chat = document.getElementById("chat");
  var log = document.getElementById("chatLog"), chips = document.getElementById("chips");
  function say(text, who){ log.appendChild(el("div","msg " + who, text)); log.scrollTop = log.scrollHeight; }
  say("Chào ba mẹ! Tuổi Ngọc có thể giúp gì ạ? Ba mẹ chọn một câu hỏi bên dưới nhé.","bot");
  FAQ.forEach(function(q){
    var b = el("button",null,q[0]); b.type = "button";
    b.addEventListener("click", function(){ say(q[0],"me"); say(q[1],"bot"); });
    chips.appendChild(b);
  });
  function toggleChat(open){
    chat.hidden = !open;
    fab.setAttribute("aria-expanded", String(open));
    if (open) document.getElementById("chatClose").focus(); else fab.focus();
  }
  fab.addEventListener("click", function(){ toggleChat(chat.hidden); });
  document.getElementById("chatClose").addEventListener("click", function(){ toggleChat(false); });
  document.addEventListener("keydown", function(e){ if (e.key === "Escape" && !chat.hidden) toggleChat(false); });
})();
