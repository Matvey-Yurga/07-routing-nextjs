import { NoteTag } from "@/types/note";
import css from "./SidebarNotes.module.css";
import Link from "next/link";
const tags: NoteTag[] = ["Work", "Personal", "Meeting", "Shopping", "Todo"];
const SidebarNotes = () => {
  return (  <ul className={css.menuList}>
      <li><Link href={`/notes/filter/All`} className={css.menuLink}>All</Link></li>
      {tags.map((tag) => (
        <li key={tag} className={css.menuItem}>
          <Link href={`/notes/filter/${tag}`} className={css.menuLink}>
            {tag}
          </Link>
        </li>
      ))}
    </ul>
)
}
export default SidebarNotes;