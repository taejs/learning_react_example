
import React from 'react'
import {MainMenu} from './mainmenu'
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
