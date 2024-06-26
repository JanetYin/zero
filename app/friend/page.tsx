import Comment from '@/components/Comment'
import data from './index.json'

export default function FriendLayout() {
  return (
    <div className="page friend">
      <div className="mx-4 mb-4 block leading-7">
        <p style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>云溪会友</p>
        <p>故人万里，归来对影。</p>
        {/* <p>
          ★ Avatar：
          <a className="avatar" href="/avatar.jpg" target="_blank" rel="noopener noreferrer">
            点击获取
          </a>
        </p> */}
      </div>
      <ul className="grid w-full grid-cols-3 gap-4 sm:grid-cols-4 xl:grid-cols-5">
        {data.map((item) => {
          return (
            <li
              key={item.name}
              className="relative  inline-block transform overflow-hidden text-center duration-300 hover:-translate-y-1"
            >
              <a href={item.link} className="block h-full w-full py-4" target="_blank" rel="noopener noreferrer">
                {item.name}
              </a>
              <img
                className="absolute right-0 top-0 h-full transform rounded-full duration-300"
                src={item.avatar}
                alt={item.name}
              />
            </li>
          )
        })}
      </ul>
      <Comment term="友邻" />
    </div>
  )
}
