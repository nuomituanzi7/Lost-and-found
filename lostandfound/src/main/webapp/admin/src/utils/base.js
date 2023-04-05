const base = {
    get() {
                return {
            url : "http://localhost:8080/lostandfound/",
            name: "lostandfound",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/lostandfound/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "失物招领"
        } 
    }
}
export default base
