'use client';
import Link from 'next/link';
import css from './TagsMenu.module.css';
import type { NoteTag } from '@/types/note';
const TagsMenu = () => {
    const tags: NoteTag[] = ["Work", "Personal", "Meeting", "Shopping", "Todo"];
    return (<div className={css.menuContainer}>
        <button className={css.menuButton}>
            Notes ▾
        </button>
        <ul className={css.menuList}>
            
            {tags.map((note) => (
                <li key={note} className={css.menuItem}>
                    <Link href={`/notes/filter/${note}`} className={css.menuLink}>
                        {note}
                    </Link></li>
            ))}
            <li><Link href={`/notes/filter/All`} className={css.menuLink}>All</Link></li>
        </ul>
    </div>
    ); 
};
export default TagsMenu;