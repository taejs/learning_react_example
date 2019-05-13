
import React from 'react'
import {MainMenu, AboutMenu} from './mainmenu'
import {Route} from 'react-router-dom'

const PageTemplate = ({children}) =>
    <div className="page">
        <MainMenu />
        {children}
    </div>

    
export const Events = () =>
    <PageTemplate>
        <section className="events">
            <h1>이벤트</h1>
        </section>
    </PageTemplate>
export const Products = () =>
    <PageTemplate>
        <section className="products">
            <h1>제품</h1>
        </section>
    </PageTemplate>
export const Contacts = () =>
    <PageTemplate>
        <section className="contact">
            <h1>고객지원</h1>
        </section>
    </PageTemplate>
    
export const Home = () =>
<PageTemplate>
    <section className="home">
        <h1>홈페이지</h1>
    </section>
</PageTemplate>

export const About = ({match}) =>
<PageTemplate>
    <section className="about">
        <Route component={AboutMenu} />
        <Route exact path="/about" component={Company}/>
        <Route path="/about/history" component={History}/> 
    </section>
</PageTemplate>

export const History = () =>
    <section className="history">
        <h2>연혁</h2>
        <p>거친것은 </p>
    </section>

export const Company = () =>
    <section className="company">
        <h2>회사소개</h2>
        <p>거친것은 </p>
    </section>

export const Service = () =>
    <section className="services">
        <h2>회사소개</h2>
        <p>거친것은 </p>
    </section>
