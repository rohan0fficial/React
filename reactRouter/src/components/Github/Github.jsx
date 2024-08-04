import React, { useEffect , useState } from "react";
import { useLoaderData } from "react-router-dom";


function Github(){
    const data = useLoaderData()
//  const [data , setData] = useState([])
//  useEffect( () => {
//     fetch('https://api.Github.com/users/rohan0fficial')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//         setData(data)
//     })
//    } , [])

    return(

        <div className="  text-2xl p-48  m-4 bg-slate-800 text-center" >
            <div  className="text-red-700 ">   Github Followers  :  {data.followers} </div> 
             <img src={data.avatar_url} alt="Github pic" width={300} 
             className="m-auto mb-5 mt-5 p-10" />
            <p>
                <ul className="">

                    <li className="m-4 text-white">
                    What is Git?

                   Git is a distributed version control system (DVCS) created by Linus Torvalds in 2005. Unlike centralized version control systems, Git allows every developer to have a complete copy of the code repository on their local machine. 
                   This architecture provides numerous benefits, including faster operations, offline capabilities, and a higher degree of flexibility in handling version histories.


                    </li>

                   <li className="m-4 text-white">
                   Key Features of Git
                   Branching and Merging: Git's branching model allows developers to create separate branches for different features, bug fixes, or experiments. These branches can be merged back into the main codebase, facilitating parallel development and reducing conflicts.

                   Distributed Nature: With Git, every developer has a full-fledged repository with complete history and full version tracking capabilities, enabling work on different parts of a project simultaneously and independently.

                   Commit History: Git keeps a detailed log of all changes made to the codebase. Each commit is accompanied by a message describing the changes, making it easier to track progress and understand the evolution of the project.



                   </li>


                </ul>
               
                   </p>

        </div>

    )
}

export default Github


export const GithubInfoLoader = async () => {
   const response = await fetch('https://api.Github.com/users/rohan0fficial ')
   return response.json()
}