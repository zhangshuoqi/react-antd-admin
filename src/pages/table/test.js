const posts = [
    {title:'Post One',body:'This is post one'},
    {title:'Post Two',body:'This is post two'},
]

function getPosts(){
    setTimeout(() => {
        let output = ''
        posts.forEach((post,index)=>{
            output += post.title + ' * '
        })
        console.log(output)
    }, 1000);
}

function createPosts(post){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            posts.push(post)
            const error = false
            if(!error){
                resolve()
            } else {
                reject('Error: Something went wrong!')
            }
        }, 2000);
    })
}

// createPosts({title:'Post Three',body:'This is post three'})
    // .then(getPosts)
    // .catch(err=>console.log(err))

async function init(){
    await createPosts({title:'Post Three',body:'This is post three'})
    getPosts()
}

init()
