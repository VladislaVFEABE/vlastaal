const TELEGRAM_TOKEN = '7992681516:AAHg8ss24clSyw9FrC-B1Zof0h0jSvHyE9k';
const CHAT_ID = '1087002720';

const curtainBasePrice = {
  roll: 420,
  daynight: 650,
  horizontal: 300,
  vertel: 300,
  rome: 650,
  bambook: 1300
};
const typeNames = {
  roll: 'Рулонка',
  daynight: 'День-ночь',
  horizontal: 'Горизонтальная',
  vertel: 'Вертикальная',
  rome: 'Римская',
  bambook: 'Бамбук'
};
const controlsMap = {
  default: ['Левое', 'Правое'],
  vertel: ['T1', 'T3']
};

const fabricData = {
  roll: [
    { id: 'r1', name: 'PEARL 1080', price: 420, img: 'img/fabrics/pearl 1080.jpg' },
    { id: 'r2', name: 'PEARL 1040', price: 420, img: 'img/fabrics/pearl 1040.jpg' },
    { id: 'r3', name: 'PEARL 1050', price: 420, img: 'img/fabrics/pearl 1050.jpg' },
    { id: 'r4', name: 'PEARL 1000', price: 420, img: 'img/fabrics/pearl 1000.jpg' },
    { id: 'r5', name: 'PEARL 1060', price: 420, img: 'img/fabrics/pearl 1060.jpg' },
    { id: 'r6', name: 'PEARL VARVARA', price: 420, img: 'img/fabrics/pearl varvara.jpg' },
    { id: 'r7', name: 'PEARL ALEXANDRA', price: 420, img: 'img/fabrics/pearl alexandra.jpg' },
    { id: 'r8', name: 'P 1240', price: 420, img: 'img/fabrics/p 1240.jpg' },
    { id: 'r9', name: 'P 1080', price: 420, img: 'img/fabrics/p 1080.jpg' },
    { id: 'r10', name: 'P 1065', price: 420, img: 'img/fabrics/p 1065.jpg' },
    { id: 'r11', name: 'P 1260', price: 420, img: 'img/fabrics/p 1260.jpg' },
    { id: 'r12', name: 'P 1080 BL', price: 420, img: 'img/fabrics/p 1080 bl.jpg' },
    { id: 'r13', name: 'P 1440', price: 420, img: 'img/fabrics/p 1440.jpg' },
    { id: 'r14', name: 'P 1090 BL', price: 420, img: 'img/fabrics/p 1090 bl.jpg' },
    { id: 'r15', name: 'VEIL', price: 420, img: 'img/fabrics/veil.jpg' }
  ],
  daynight: [
    { id: 'd1', name: 'BAMBOO R 14', price: 650, img: 'img/fabrics/bamboo r 14.jpg' },
    { id: 'd2', name: 'BAMBOO R 7', price: 650, img: 'img/fabrics/bamboo r 7.jpg' },
    { id: 'd3', name: 'BAMBOO R 20', price: 650, img: 'img/fabrics/bamboo r 20.jpg' },
    { id: 'd4', name: 'SAMARA V 02', price: 650, img: 'img/fabrics/samara v 02.jpg' },
    { id: 'd5', name: 'SAMARA V 04', price: 650, img: 'img/fabrics/samara v 04.jpg' },
    { id: 'd6', name: 'BURSA V 03', price: 650, img: 'img/fabrics/bursa v 03.jpg' },
    { id: 'd7', name: 'BURSA V 04', price: 650, img: 'img/fabrics/bursa v 04.jpg' },
    { id: 'd8', name: 'LEKEUR 100', price: 650, img: 'img/fabrics/lekeur 100.jpg' },
    { id: 'd9', name: 'LEKEUR 01', price: 650, img: 'img/fabrics/lekeur 01.jpg' },
    { id: 'd10', name: 'LEKEUR 03', price: 650, img: 'img/fabrics/lekeur 03.jpg' },
    { id: 'd11', name: 'LEKEUR 114', price: 650, img: 'img/fabrics/lekeur 114.jpg' },
    { id: 'd12', name: 'LEKEUR 27', price: 650, img: 'img/fabrics/lekeur 27.jpg' },
    { id: 'd13', name: 'LEKEUR 22', price: 650, img: 'img/fabrics/lekeur 22.jpg' },
    { id: 'd14', name: 'BAMBOO R GRAY', price: 650, img: 'img/fabrics/bamboo r gray.jpg' },
    { id: 'd15', name: 'BAMBOO R BROWN', price: 650, img: 'img/fabrics/bamboo r brown.jpg' },
    { id: 'd16', name: 'BHN 96 V 02', price: 650, img: 'img/fabrics/bhn 96 v 02.jpg' },
    { id: 'd17', name: 'VLASTA 02', price: 650, img: 'img/fabrics/vlasta 02.jpg'},
    { id: 'd18', name: 'VLASTA 01', price: 650, img: 'img/fabrics/vlasta 01.jpg' },
    { id: 'd19', name: 'VLASTA 03', price: 650, img: 'img/fabrics/vlasta 03.jpg' },
    { id: 'd20', name: 'BHN 96 V 00', price: 650, img: 'img/fabrics/bhn 96 v00.jpg' }
  ],
  horizontal: [
    { id: 'h1', name: 'БЕЛЫЙ', price: 300, img: 'img/fabrics/whitecolor.jpg' },
    { id: 'h2', name: 'СЕРЫЙ', price: 300, img: 'img/fabrics/greycolor.png' },
    { id: 'h3', name: 'КРАСНЫЙ', price: 300, img: 'img/fabrics/redcolor.jpg' },
    { id: 'h4', name: 'ЧЁРНЫЙ', price: 300, img: 'img/fabrics/blackcolor.jpg' },
    { id: 'h5', name: 'КОРИЧНЕВЫЙ', price: 300, img: 'img/fabrics/browncolor.png' },
    { id: 'h6', name: 'ЖЁЛТЫЙ', price: 300, img: 'img/fabrics/yellowcolor.png' }
  ],
  rome: [
    { id: 'r1', name: 'Римские 1', price: 325, img: 'img/fabrics/rome1.jpg' },
    { id: 'r2', name: 'Римские 2', price: 325, img: 'img/fabrics/rome2.jpg' }
  ],
  vertel: [
    { id: 'v1', name: 'Вертикальные 1', price: 296, img: 'img/fabrics/vertical1.jpg' },
    { id: 'v2', name: 'Вертикальные 2', price: 296, img: 'img/fabrics/vertical2.jpg' }
  ],
  bambook: [
    { id: 'b1', name: 'Бамбуковые', price: 325, img: 'img/fabrics/bambook.jpg' }
  ]
};


document.getElementById('generateForms').addEventListener('click',()=>{
  const count = parseInt(document.getElementById('curtainCount').value);
  const container = document.getElementById('formsContainer');
  container.innerHTML='';

  for(let i=0;i<count;i++){
    const div = document.createElement('div');
    div.className='curtain-form';
    div.innerHTML=`
      <h4>🪟 Штора ${i+1}</h4>
      <label>Тип изделия:
        <select class="typeSelect">
          <option value="" selected disabled>Выберите тип</option>
          <option value="roll">Рулонка</option>
          <option value="daynight">День-ночь</option>
          <option value="horizontal">Горизонтальная</option>
          <option value="vertel">Вертикальная</option>
          <option value="rome">Римская</option>
          <option value="bambook">Бамбук</option>
        </select>
      </label>
         <label>Управление:
        <select class="controlSelect">
          <option value="" selected disabled>Выберите управление</option>
        </select>
      </label>
      <label>Ткань:
        <div class="fabric-choice"></div>
      </label>
      <label>Ширина (м): <input type="number" class="widthInput" step="0.1" min="0"></label>
      <label>Высота (м): <input type="number" class="heightInput" step="0.1" min="0"></label>
      <div class="curtainPrice">Цена: 0 ₽</div>
    `;
    container.appendChild(div);

    const typeSelect = div.querySelector('.typeSelect');
    const fabricDiv = div.querySelector('.fabric-choice');
    const controlSelect = div.querySelector('.controlSelect');

 typeSelect.addEventListener('change', () => {
  const type = typeSelect.value;
  fabricDiv.innerHTML = '';
  fabricDiv.style.display = 'flex';
  fabricDiv.style.flexWrap = 'wrap';
  fabricDiv.style.gap = '10px';

  fabricData[type].forEach(f => {
    const wrapper = document.createElement('div');
    wrapper.style.display = 'flex';
    wrapper.style.flexDirection = 'column';
    wrapper.style.alignItems = 'center';
    wrapper.style.cursor = 'pointer';
    wrapper.style.width = '70px';              // ширина под круг
    wrapper.style.transition = '0.2s';
    
    const img = document.createElement('img');
    img.src = f.img;
    img.title = f.name;
    img.dataset.price = curtainBasePrice[type];
    img.style.width = '60px';
    img.style.height = '60px';
    img.style.borderRadius = '50%';           // круглая форма
    img.style.objectFit = 'cover';
    img.style.border = '2px solid transparent'; // рамка для выделения
    wrapper.appendChild(img);
    
    const nameDiv = document.createElement('div');
    nameDiv.textContent = f.name;
    nameDiv.style.textAlign = 'center';
    nameDiv.style.fontSize = '10px';
    nameDiv.style.marginTop = '5px';
    nameDiv.style.wordBreak = 'break-word'; // перенос слов
    wrapper.appendChild(nameDiv);

    fabricDiv.appendChild(wrapper);

    img.addEventListener('click', () => {
  fabricDiv.querySelectorAll('img').forEach(i => {
    i.style.borderColor = 'transparent';
    i.classList.remove('selected');
  });
  img.style.borderColor = '#007bff';  // выделение выбранной
  img.classList.add('selected');       // <-- добавляем класс
  calculateTotal();
});

    wrapper.addEventListener('mouseenter', () => wrapper.style.transform = 'scale(1.1)');
    wrapper.addEventListener('mouseleave', () => wrapper.style.transform = 'scale(1)');
  });

  // управление
  controlSelect.innerHTML = '';
  const options = type === 'vertel' ? controlsMap.vertel : controlsMap.default;
  options.forEach(opt => {
    const o = document.createElement('option');
    o.value = o.textContent = opt;
    controlSelect.appendChild(o);
  });
  calculateTotal();
});

    div.querySelectorAll('input').forEach(input=>input.addEventListener('input',calculateTotal));
    controlSelect.addEventListener('change',calculateTotal);
  }
});

function calculateTotal(){
  let total=0;
  document.querySelectorAll('.curtain-form').forEach(form=>{
    const selectedFabric = form.querySelector('.fabric-choice img.selected');
    const width = parseFloat(form.querySelector('.widthInput').value)||0;
    const height = parseFloat(form.querySelector('.heightInput').value)||0;
    let price=0;
    if(selectedFabric){
      const area = Math.ceil(width*height*10)/10;
      // Прибавляем 50 ₽ к каждой шторе, но без отдельного отображения
      price = area * parseFloat(selectedFabric.dataset.price) + 50;
    }
    form.querySelector('.curtainPrice').textContent = `Цена: ${price.toFixed(0)} ₽`;
    total += price;
  });
  document.getElementById('totalPrice').textContent = total.toFixed(0);
}
// модалка и отправка
document.getElementById('orderBtn').addEventListener('click',()=> {
  document.getElementById('orderModal').style.display='flex';
});

document.getElementById('sendOrder').addEventListener('click',()=>{
  const fio = document.getElementById('fullName').value;
  const phone = document.getElementById('phone').value;
  const address = document.getElementById('address').value;
  let message = `🛒 *Новый заказ с сайта* 🛒\n\n ${fio}\n📞 ${phone}\n🏠 ${address}\n\n`;

document.querySelectorAll('.curtain-form').forEach((form,idx)=>{
  const typeKey = form.querySelector('.typeSelect').value;
  const type = typeNames[typeKey] || '—';
  const width = form.querySelector('.widthInput').value || '—';
  const height = form.querySelector('.heightInput').value || '—';
  const fabric = form.querySelector('.fabric-choice img.selected')?.title || '—';
  const control = form.querySelector('.controlSelect').value || '—';
  const price = form.querySelector('.curtainPrice').textContent.split(': ')[1] || '0 ₽';

  message += `🪟 *Штора ${idx+1}*\n` +
             `📌 Тип: ${type}\n` +
             `🎛 Управление: ${control}\n` +
             `🧵 Ткань: ${fabric}\n` +
             `↔️ Ширина: ${width} м\n` +
             `↕️ Высота: ${height} м\n` +
             `💰 Цена: ${price} ₽\n\n`;
});
  message += `💰 *Итого:* ${document.getElementById('totalPrice').textContent} ₽`;

  fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`,{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify({ chat_id: CHAT_ID, text: message, parse_mode:'Markdown' })
  }).then(()=>{ 
    alert('✅ Заказ отправлен!'); 
    document.getElementById('orderModal').style.display='none'; 
  });
});
// кнопка отмены
document.getElementById('cancelOrder').addEventListener('click', () => {
  document.getElementById('orderModal').style.display = 'none';
});

// закрытие при клике вне окна
window.addEventListener('click', (e) => {
  if(e.target.id === 'orderModal'){
    document.getElementById('orderModal').style.display = 'none';
  }
});