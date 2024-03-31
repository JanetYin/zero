// import { ExternalLink } from 'lucide-react'
// import Comment from '@/components/Comment'
// import data from './index.json'

export default function FriendLayout() {
  return (
    <div className="page project">
      <div className="mx-4 mb-4 block leading-7">
        <p style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Project</p>
      </div>
    </div>
    // <div className="page project">
    //   <ul>
    //     {data.map((item) => {
    //       return (
    //         <li key={item.name} className="mb-10 leading-relaxed">
    //           <a className="link text-xl" href={item.code} target="_blank" rel="noopener noreferrer">
    //             {item.name}
    //             <ExternalLink className="inline-block h-5 w-5 -translate-y-0.5 transform" />
    //           </a>
    //           <p>{item.description}</p>
    //         </li>
    //       )
    //     })}
    //   </ul>
    //   <Comment term="项目" />
    // </div>

  )
}
// [
//   {
//     "name": "Zero",
//     "code": "https://github.com/chanshiyucx/zero",
//     "demo": "https://chanshiyu.com",
//     "description": "蝉時雨开发的博客主题。 "
//   }
// ]
