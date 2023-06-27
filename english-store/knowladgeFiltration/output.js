const words = [
  // from 1-200
  ...[{"ru":"относительно, касательно","en":"concerning","transcription":"[kənˈsɜːrnɪŋ]"},{"ru":"принадлежать","en":"belong","transcription":"[bɪˈlɔːŋ]"},{"ru":"дело, роман","en":"affair","transcription":"[əˈfer]"},{"ru":"клуб, дубинка","en":"club","transcription":"[klʌb]"},{"ru":"разговор, беседа","en":"conversation","transcription":"[ˌkɑːnvərˈseɪʃn]"},{"ru":"ассоциация, объединение","en":"association","transcription":"[əˌsoʊsiˈeɪʃn]"},{"ru":"плата, ответственность, обвинять","en":"charge","transcription":"[tʃɑːrdʒ]"},{"ru":"позволить себе, быть в состоянии","en":"afford","transcription":"[əˈfɔːrd]"},{"ru":"приносить, приводить","en":"bring","transcription":"[brɪŋ]"},{"ru":"живой","en":"alive","transcription":"[əˈlaɪv]"},{"ru":"глубина","en":"depth","transcription":"[depθ]"},{"ru":"клиент, покупатель","en":"customer","transcription":"[ˈkʌstəmər]"},{"ru":"требование, спрос, требовать","en":"demand","transcription":"[dɪˈmænd]"},{"ru":"количество, сумма, составлять","en":"amount","transcription":"[əˈmaʊnt]"},{"ru":"позволять, разрешать","en":"allow","transcription":"[əˈlaʊ]"},{"ru":"на самом деле, фактически","en":"actually","transcription":"[ˈæktʃuəli]"},{"ru":"прикреплять(ся), присоединять(ся)","en":"attach","transcription":"[əˈtætʃ]"},{"ru":"обвинять, порицать, вина","en":"blame","transcription":"[bleɪm]"},{"ru":"существо, создание","en":"creature","transcription":"[ˈkriːtʃər]"},{"ru":"деятельность, активность","en":"activity","transcription":"[ækˈtɪvəti]"},{"ru":"повреждение, ущерб, повреждать","en":"damage","transcription":"[ˈdæmɪdʒ]"},{"ru":"жульничать, обманывать, мошенничество","en":"cheat","transcription":"[tʃiːt]"},{"ru":"лучший, более подходящий, лучше","en":"better","transcription":"[ˈbetər]"},{"ru":"уверенный","en":"confident","transcription":"[ˈkɑːnfɪdənt]"},{"ru":"влиять, затрагивать","en":"affect","transcription":"[əˈfekt]"},{"ru":"отсутствующий, отсутствовать","en":"absent","transcription":"[æbˈsent]"},{"ru":"способный, обладающий способностью","en":"able","transcription":"[ˈeɪbl]"},{"ru":"пространство, область","en":"area","transcription":"[ˈeriə]"},{"ru":"случай, обстоятельство","en":"case","transcription":"[keɪs]"},{"ru":"широкий, обширный, широко","en":"broad","transcription":"[brɔːd]"},{"ru":"правильный, верный, исправлять","en":"correct","transcription":"[kəˈrekt]"},{"ru":"медлить, задерживать, задержка","en":"delay","transcription":"[dɪˈleɪ]"},{"ru":"непрерывный, постоянный","en":"continuous","transcription":"[kənˈtɪnjuəs]"},{"ru":"баланс, равновесие, (с)балансировать","en":"balance","transcription":"[ˈbæləns]"},{"ru":"курс, направление, струиться","en":"course","transcription":"[kɔːrs]"},{"ru":"отношение, позиция","en":"attitude","transcription":"[ˈætɪtuːd]"},{"ru":"определенный, точный","en":"certain","transcription":"[ˈsɜːrtn]"},{"ru":"соглашение, договор","en":"agreement","transcription":"[əˈɡriːmənt]"},{"ru":"куст, кустарник","en":"bush","transcription":"[bʊʃ]"},{"ru":"удобный, подходящий","en":"convenient","transcription":"[kənˈviːniənt]"},{"ru":"удобный, комфортный","en":"comfortable","transcription":"[ˈkʌmftəbl]"},{"ru":"приходить, прибывать","en":"come","transcription":"[kʌm]"},{"ru":"комбинация, сочетание","en":"combination","transcription":"[ˌkɑːmbɪˈneɪʃn]"},{"ru":"долг, задолженность","en":"debt","transcription":"[det]"},{"ru":"мочь, уметь","en":"can","transcription":"[kən, kæn]"},{"ru":"допускать, принимать","en":"admit","transcription":"[ədˈmɪt]"},{"ru":"причина, основание, вызывать","en":"cause","transcription":"[kɔːz]"},{"ru":"взрыв, взрываться","en":"burst","transcription":"[bɜːrst]"},{"ru":"попытка, покушение, пытаться","en":"attempt","transcription":"[əˈtempt]"},{"ru":"требовать, утверждать, требование","en":"claim","transcription":"[kleɪm]"},{"ru":"умный, способный","en":"clever","transcription":"[ˈklevər]"},{"ru":"коммуникация, информация","en":"communication","transcription":"[kəˌmjuːnɪˈkeɪʃn]"},{"ru":"желание, желать","en":"desire","transcription":"[dɪˈzaɪər]"},{"ru":"соглашение, договоренность","en":"arrangement","transcription":"[əˈreɪndʒmənt]"},{"ru":"выбор","en":"choice","transcription":"[tʃɔɪs]"},{"ru":"общий, простой","en":"common","transcription":"[ˈkɑːmən]"},{"ru":"с.-х. культура, урожай","en":"crop","transcription":"[krɑːp]"},{"ru":"польза, выгода, извлекать пользу","en":"benefit","transcription":"[ˈbenɪfɪt]"},{"ru":"отдельно, врозь","en":"apart","transcription":"[əˈpɑːrt]"},{"ru":"уверенность, доверие","en":"confidence","transcription":"[ˈkɑːnfɪdəns]"},{"ru":"искусство","en":"art","transcription":"[ɑːrt]"},{"ru":"наносить поражение, побеждать, поражение","en":"defeat","transcription":"[dɪˈfiːt]"},{"ru":"доступный","en":"available","transcription":"[əˈveɪləbl]"},{"ru":"покрывать, накрывать, крышка","en":"cover","transcription":"[ˈkʌvər]"},{"ru":"искусственный","en":"artificial","transcription":"[ˌɑːrtɪˈfɪʃl]"},{"ru":"снижать(ся), уменьшать(ся), снижение","en":"decrease","transcription":"[ˈdiːkriːs]"},{"ru":"решать, принимать решение","en":"decide","transcription":"[dɪˈsaɪd]"},{"ru":"начало","en":"beginning","transcription":"[bɪˈɡɪnɪŋ]"},{"ru":"главный, ведущий, начальник","en":"chief","transcription":"[tʃiːf]"},{"ru":"дизайн, замысел, проектировать","en":"design","transcription":"[dɪˈzaɪn]"},{"ru":"связка, гроздь","en":"bunch","transcription":"[bʌntʃ]"}],
  // from 201-400
  ...[{"ru":"фигура, внешний вид, изображать","en":"figure","transcription":"[ˈfɪɡjər]"},{"ru":"вперед, дальше, передний","en":"forward","transcription":"[ˈfɔːrwərd]"},{"ru":"впечатляющий","en":"impressive","transcription":"[ɪmˈpresɪv]"},{"ru":"независимый, самостоятельный","en":"independent","transcription":"[ˌɪndɪˈpendənt]"},{"ru":"упражнение, осуществлять","en":"exercise","transcription":"[ˈeksərsaɪz]"},{"ru":"оборудование, снаряжение","en":"equipment","transcription":"[ɪˈkwɪpmənt]"},{"ru":"запрещать","en":"forbid","transcription":"[fərˈbɪd]"},{"ru":"класс, оценка, сортировать","en":"grade","transcription":"[ɡreɪd]"},{"ru":"ударять, поражать, удар","en":"hit","transcription":"[hɪt]"},{"ru":"(на)всегда, (на)вечно","en":"forever","transcription":"[fərˈevər]"},{"ru":"провал, неудача","en":"failure","transcription":"[ˈfeɪljər]"},{"ru":"усилие, попытка","en":"effort","transcription":"[ˈefərt]"},{"ru":"возрастать, увеличивать(ся), увеличение","en":"increase","transcription":"[ɪnˈkriːs]"},{"ru":"бывший, предшествующий","en":"former","transcription":"[ˈfɔːrmər]"},{"ru":"крайний, экстремальный","en":"extreme","transcription":"[ɪkˈstriːm]"},{"ru":"цель, задача","en":"goal","transcription":"[ɡoʊl]"},{"ru":"умирать","en":"die","transcription":"[daɪ]"},{"ru":"учреждать, устанавливать","en":"establish","transcription":"[ɪˈstæblɪʃ]"},{"ru":"ронять, капать, падение","en":"drop","transcription":"[drɑːp]"},{"ru":"другой, иной","en":"different","transcription":"[ˈdɪfrənt]"},{"ru":"событие, происшествие","en":"event","transcription":"[ɪˈvent]"},{"ru":"определять, устанавливать","en":"determine","transcription":"[dɪˈtɜːrmɪn]"},{"ru":"терпеть неудачу, подводить, неудача","en":"fail","transcription":"[feɪl]"},{"ru":"зерно","en":"grain","transcription":"[ɡreɪn]"},{"ru":"введение, представление кого-л.","en":"introduction","transcription":"[ˌɪntrəˈdʌkʃn]"},{"ru":"внутренний","en":"inner","transcription":"[ˈɪnər]"},{"ru":"влияние, влиять","en":"influence","transcription":"[ˈɪnfluəns]"},{"ru":"весь, целый","en":"entire","transcription":"[ɪnˈtaɪər]"},{"ru":"зарабатывать","en":"earn","transcription":"[ɜːrn]"},{"ru":"постепенный","en":"gradual","transcription":"[ˈɡrædʒuəl]"},{"ru":"распускать, увольнять","en":"dismiss","transcription":"[dɪsˈmɪs]"},{"ru":"подчеркивать, акцентировать","en":"emphasize","transcription":"[ˈemfəsaɪz]"},{"ru":"вместо, взамен","en":"instead","transcription":"[ɪnˈsted]"},{"ru":"делить(ся), разделять(ся)","en":"divide","transcription":"[dɪˈvaɪd]"},{"ru":"в конце концов, наконец","en":"finally","transcription":"[ˈfaɪnəli]"},{"ru":"знакомый, привычный","en":"familiar","transcription":"[fəˈmɪliər]"},{"ru":"палец","en":"finger","transcription":"[ˈfɪŋɡər]"},{"ru":"последний, продолжаться","en":"last","transcription":"[læst]"},{"ru":"довольно-таки, достаточно","en":"fairly","transcription":"[ˈferli]"},{"ru":"обычно, как правило","en":"generally","transcription":"[ˈdʒenrəli]"},{"ru":"край, грань","en":"edge","transcription":"[edʒ]"},{"ru":"великий, большой","en":"grand","transcription":"[ɡrænd]"},{"ru":"точно, именно","en":"exactly","transcription":"[ɪɡˈzæktli]"},{"ru":"долг, обязанность","en":"duty","transcription":"[ˈduːti]"},{"ru":"легкий, нетрудный, легко","en":"easy","transcription":"[ˈiːzi]"},{"ru":"направление, руководство","en":"direction","transcription":"[dɪˈrekʃn, daɪˈrekʃn]"},{"ru":"инженер, механик, проектировать","en":"engineer","transcription":"[ˌendʒɪˈnɪr]"},{"ru":"получать, приобретать, прирост","en":"gain","transcription":"[ɡeɪn]"},{"ru":"полный, целый","en":"full","transcription":"[fʊl]"},{"ru":"решительность, решение","en":"determination","transcription":"[dɪˌtɜːrmɪˈneɪʃn]"},{"ru":"рамка, рама","en":"frame","transcription":"[freɪm]"},{"ru":"передний, перед","en":"front","transcription":"[frʌnt]"},{"ru":"ждать, ожидать","en":"expect","transcription":"[ɪkˈspekt]"},{"ru":"знание","en":"knowledge","transcription":"[ˈnɑːlɪdʒ]"},{"ru":"управлять, править","en":"govern","transcription":"[ˈɡʌvərn]"},{"ru":"частый","en":"frequent","transcription":"[ˈfriːkwənt]"},{"ru":"собирать(ся)","en":"gather","transcription":"[ˈɡæðər]"},{"ru":"равный, одинаковый, равняться","en":"equal","transcription":"[ˈiːkwəl]"},{"ru":"воспитывать, обучать","en":"educate","transcription":"[ˈedʒukeɪt]"},{"ru":"твердый, крепкий, фирма","en":"firm","transcription":"[fɜːrm]"},{"ru":"интерес, выгода, интересовать","en":"interest","transcription":"['ɪnt(ə)rəst]"},{"ru":"экономика, экономичность, экономичный","en":"economy","transcription":"[ɪˈkɑːnəmi]"},{"ru":"складывать, складка","en":"fold","transcription":"[foʊld]"},{"ru":"привычка, обычай","en":"habit","transcription":"[ˈhæbɪt]"},{"ru":"случаться, происходить","en":"happen","transcription":"[ˈhæpən]"},{"ru":"вход","en":"entrance","transcription":"[ˈentrəns]"},{"ru":"честный, справедливый","en":"fair","transcription":"[fer]"},{"ru":"особенность, черта, показывать","en":"feature","transcription":"[ˈfiːtʃər]"},{"ru":"побег, бегство, бежать (из заключения)","en":"escape","transcription":"[ɪˈskeɪp]"},{"ru":"прекрасно, хорошо, прекрасный","en":"fine","transcription":"[faɪn]"},{"ru":"немедленно","en":"immediately","transcription":"[ɪˈmiːdiətli]"},{"ru":"быстрый, быстро","en":"fast","transcription":"[fæst]"},{"ru":"исследовать, изучать","en":"examine","transcription":"[ɪɡˈzæmɪn]"},{"ru":"игнорировать","en":"ignore","transcription":"[ɪɡˈnɔːr]"},{"ru":"получить","en":"get","transcription":"[ɡet]"},{"ru":"факт, явление","en":"fact","transcription":"[fækt]"},{"ru":"(+ to) обусловленный, должный","en":"due","transcription":"[duː]"},{"ru":"прямой, направлять","en":"direct","transcription":"[dəˈrekt (dɪ- / daɪ-)]"},{"ru":"нанимать, применять","en":"employ","transcription":"[ɪmˈplɔɪ]"}],
]

words.forEach((word) => {
  const shakeCount = words.length * 10

  for (let i = 0; i < shakeCount; i += 1) {
    const index1 = Math.floor(Math.random() * words.length);
    const index2 = Math.floor(Math.random() * words.length);
    const tempItem = words[index1]
    words[index1] = words[index2]
    words[index2] = tempItem
  }

})

function extractUnkown() {
  const all = Array.from(document.querySelectorAll("tr"))
  const selected = Array.from(
    document.querySelectorAll("tr input")
  )

  const selectedResult = Array.from(selected).filter((input) => {
    return input.checked
  }).map((input) => {
    return input.parentNode.parentNode
  })

  const result = all.reduce((result, item, index) => {
    if (selectedResult.indexOf(item) !== -1) {
      result.unknown.push(words[index])
    } else {
      result.known.push(words[index])
    }

    return result
  }, {
    known: [],
    unknown: [],
  })

  document.querySelector("#root").innerHTML = document.querySelector("#root").innerHTML + '<br /><br /><br />known: ' + JSON.stringify(result.known) + '<br /><br /><br /><br />unknown: ' + JSON.stringify(result.unknown)
}

let content = ""
content += `<h3>Фильтрация</h3>`
content += `
  <div>
    <table style="border-collapse: collapse;">
        ${(() => {
  const results = words.map((item, index) => {
    return `
              <tr>
                <td>${index+1}</td>
                <td>${item.ru}</td>
                <td>${item.transcription}</td>
                <td>${item.en}</td>
              </tr>
            `
  })

  // console.log("results: ", results)

  return results.join("")
})()}
    </table>
  </div>
`;

document.querySelector("#root").innerHTML = content
