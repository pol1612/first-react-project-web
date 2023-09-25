
import {MainContent} from "./mainContent.js"

import {HeaderContent} from "./headerContent.js"

const main = ReactDOM.createRoot(document.getElementById('main'))
const header = ReactDOM.createRoot(document.getElementById('header'))

header.render(
    <HeaderContent />
 )
 
 main.render(
    <MainContent />
 )
/*
 function HeaderContent () {
    return (
        <header class="yellow-box">
            <h1>Corporate strategy</h1>
        </header>
    )
 }

 function MainContent () {
    return (
        <section>
            <img src="cafe.jpg" alt="sample image"/>
            <h2>Nice section heading</h2>
            <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
            <p>At the end of the day, going forward, a new paradigm that has evolved from generation X is on the runway heading towards a streamlined cloud solution.</p>		
        </section>
    )
 }

/*
header.render(
    <header>
        <h1>Corporate strategy</h1>
    </header>
)

main.render(
    <section>
      <img src="cafe.jpg" alt="sample image"/>
      <h2>Nice section heading</h2>
      <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
      <p>At the end of the day, going forward, a new paradigm that has evolved from generation X is on the runway heading towards a streamlined cloud solution.</p>		
   </section>
)
*/