
import { ProductsList } from "../../components/ProductsList"
import Game from "../../models/Game"
import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'

const promocoes: Game[] = [
  {
    id:1,
    category:'Acão',
    description: 'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Residente Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident,
  },
  {
    id:2,
    category:'Acão',
    description: 'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment..',
    title: 'Diablo IV',
    system: 'PS5',
    infos: ['5%', 'R$ 290,00'],
    image: diablo,
  },
  {
    id:3,
    category:'Acão',
    description: 'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Residente Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: zelda,
  },
  {
    id:4,
    category:'Acão',
    description: 'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Residente Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: starWars,
  }
]

const emBreve: Game [] = [
  {
    id:5,
    category: 'RPG',
    description: 'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment...',
    title: 'Diablo 4',
    system: 'Windows',
    infos: ['17/05'],
    image: diablo,
  },
  {
    id:6,
    category: 'RPG',
    description: 'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment...',
    title: 'Zelda',
    system: 'Windows',
    infos: ['17/05'],
    image: zelda
  },
  {
    id:7,
    category: 'RPG',
    description: 'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment...',
    title: 'Star Wars',
    system: 'Windows',
    infos: ['17/05'],
    image: starWars,
  },
  {
    id:8,
    category: 'RPG',
    description: 'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment...',
    title: 'Residente Evil 4',
    system: 'Nintendo',
    infos: ['17/05'],
    image: resident,
  }

]

const Categories = () => (
    <>
      <ProductsList games={promocoes} title='RPG' background='gray' />
      <ProductsList games={emBreve} title='Ação' background='black' />
      <ProductsList games={promocoes} title='Aventuta' background='gray' />
      <ProductsList games={emBreve} title='FPS' background='black' />
    </>
)

export default Categories
