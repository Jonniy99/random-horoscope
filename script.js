function generationNumbers(num) {
    return Math.floor(Math.random() * num)
}
// случайный горосков для знаков зодиака + совет дня
const horoscope = {
    starSign: ['Овен', 'Телец', 'Близнецы', 'Рак', 'Лев', 'Дева', 'Весы', 'Скорпион', 'Стрелец', 'Козерок', 'Водолей', 'Рыбы'], /*знаки зодиака*/
    fortune: ['ужаснейший день', 'неудачный день', 'хороший день', 'отличный день'], /* какой будет день*/
    adviceDay: ['не ешьте на ночь', 'Кто нападает, не достигнет успеха', 'Заткнуться - это как давать совет, но лучше', 'Вы должны изменить решение, принятое вами на днях',
        'Постарайтесь никого не покалечить', 'Расслабьтесь', 'Уделите полчаса обдумыванию планов на ближайшее время'] /*совет на день */
}

// пустой массив для того, чтобы в дальнейшем в него поместить уже случ сгнерированный horoscope
let personalHoroscope = []

//итерация по объекту 
for (let prop in horoscope) {
    let optionId = generationNumbers(horoscope[prop].length)

    // Добавляем некоторый текст для нормального чтения объекта (уже в консоли)
    switch (prop) {
        case 'starSign':
            personalHoroscope.push(`Знак зодиака: "${horoscope[prop][optionId]}".`)
            break

        case 'fortune':
            personalHoroscope.push(`Сегодня у вас будет: "${horoscope[prop][optionId]}".`)
            break

        case 'adviceDay':
            personalHoroscope.push(`Совет дня: "${horoscope[prop][optionId]}".`)
            break

        default:
            personalHoroscope.push('Недостаточно информации.')
    }
}

function formatHoroscope(wisdom) {

    const formatted = personalHoroscope.join('\n')

    console.log(formatted)
}

formatHoroscope(personalHoroscope);