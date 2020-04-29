var users=[
    {
        id :1,
        name:"Sang",
    },
    {
        id :2,
        name:"Trang",
        age: 20
    }
]
module.exports.index=function(req,res){
    res.render('users/users', {users});
};
module.exports.search=function(req,res){
    var name= req.query.q;
    var matchUser= users.filter(function(user){
        return user.name.toLowerCase().indexOf(name.toLowerCase())!==-1;
    });
    res.render('users/users',{
        users: matchUser
    });
}
module.exports.add=function(req,res){
    res.render('users/addUser');
}
module.exports.addNew=function(req,res){
    users.push(req.body);
    res.redirect('/users');
}
module.exports.view=function(req, res){
    var u = parseInt(req.params.id);
    var u2= users.find(function(user){
        return user.id===u;
    });
    res.render('users/view',{
        user: u2
    })
}