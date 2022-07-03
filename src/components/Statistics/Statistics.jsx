import style from './statistics.module.css'
import data from 'data.json'
import { Title } from './Title/Title';
import { StatList } from './StatList/StatList';


export const Statistics = () => {
    return <section className={style.statistics}>
            <Title title="Upload stats" stats={data}/>
            <StatList stats={data}/>
  
  </section>
}