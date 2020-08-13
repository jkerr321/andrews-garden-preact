import { h } from 'preact';
import Header from '../../components/header';
import Garden from '../../components/garden';

import s from './style.css';

const Home = () => (
    <div class={s.layout}>
        <Header />
        <Garden />
    </div>
);

export default Home;
