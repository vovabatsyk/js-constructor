import image from './assets/img.jpeg'
import {TextBlock, TitleBlock, ImageBlock, TextColumnsBlock} from './classes/blocks'
import { css } from './utils'

const text ="Данный сайт посвящен различным языкам и технологиям программирования, компьютерам, мобильным платформам и ИТ-технологиям. Здесь будут выкладываться различные руководства и учебные материалы, статьи и примеры. Приоритетные направления - язык C# и семейство технологий .NET (ASP.NET MVC, WPF, Xamarin, Entity Framework и т.д.), технологии на базе Java ( Java SE, программирование под ОС Андроид и т.д.), Python, Dart (в том числе Flutter) работа с базами данных (MS SQL Server, MySQL, MongoDB) а также WEB-технологии, такие как HTML5, AJAX, jQuery, Node.js, ExtJS, Angular, React и др."

export const model = [
  new TitleBlock('Языки программирования', {
    tag: 'h2',
    styles: css({
      background: 'linear-gradient(to right, #ff0099, #493240);color: #fff;padding: 1.5rem;text-align: center;',
      padding: '1.5rem',
      'text-align': 'center'
    }),
  }),
  new ImageBlock(image, {
    styles: 'padding: 2rem 0;display: flex;justify-content: center;',
    alt: 'my image',
    imageStyles: 'width: 500px; height: auto;'
  }),
  new TextColumnsBlock([
    'Python представляет интепретируей язык, он будет работать везде, где установлен интерпретатор. Фактически он является универсальным кроссплатформенным языком, поэтому приложения на Python будут работать на большинстве известных платформ как Windows, Linux, MacOS.',
    'C# является объектно-ориентированным и в этом плане много перенял у Java и С++. Например, C# поддерживает полиморфизм, наследование, перегрузку операторов, статическую типизацию. Объектно-ориентированный подход позволяет решить задачи по построению крупных, но в тоже время гибких, масштабируемых и расширяемых приложений. И C# продолжает активно развиваться, и с каждой новой версией появляется все больше интересных функциональностей, как, например, лямбды, динамическое связывание, асинхронные методы и т.д.',
    'Ключевой особенностью языка Java является то, что его код сначала транслируется в специальный байт-код, независимый от платформы. А затем этот байт-код выполняется виртуальной машиной JVM (Java Virtual Machine). В этом плане Java отличается от стандартных интерпретируемых языков как PHP или Perl, код которых сразу же выполняется интерпретатором. В то же время Java не является и чисто компилируемым языком, как С или С++.'
  ], {
    styles: 'padding: 2rem 0; color: #fff;background: linear-gradient(to bottom, #8e2de2, #4a00e0);font-weight: bold;'
  }),
  new TextBlock(text, {
    styles: 'background: linear-gradient(to left, #f2994a, #f2c94c);font-weight: bold;padding: 1rem;'
  }),
]