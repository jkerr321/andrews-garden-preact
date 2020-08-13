import { h } from 'preact';
import { Link } from 'preact-router/match';
import s from './style.css';

const Header = () => (
    <div class={s.header}>
        <div class={s['header-right']}>
            <Link href="">Gallery</Link>
            <Link
                href="https://docs.google.com/spreadsheets/d/1Khj2u55fpyr7pjKxJKu8HQzmj6UD5x2fTAxpsme0wcM/edit#gid=590538584"
                target="_blank"
            >
                Data
            </Link>
        </div>
        <div class={s['header-left']}></div>
        <button
            class={[
                s['header-centre'],
                s['button'],
                s['button--big'],
                s['js-button-toggle-view'],
                s.border,
            ].join(' ')}
            type="button"
        >
            Toggle View
        </button>
    </div>
);

export default Header;
