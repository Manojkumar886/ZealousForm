let mystudents=[
    {
        "zeaName":"Manojkumar",
        "zeaDob":"12-10-2001",
        "zeaAdd":"Namakkal",
        "zeaMail":"manojgeetha12@gmail.com",
        "zeaNum":"9872772763",
        "zeaCourse":"Java Full Stack",
        "zeaPayment":"cheque",
        "zeaSkills":["Malayalam","Tamil","English"]
    },
    {
        "zeaName":"Nandha",
        "zeaDob":"12-3-2001",
        "zeaAdd":"Chennai",
        "zeaMail":"nhsa12@gmail.com",
        "zeaNum":"9234772763",
        "zeaCourse":"PHP Full Stack",
        "zeaPayment":"cash",
        "zeaSkills":["Malayalam","Tamil"]
    },
    {
        "zeaName":"Mani",
        "zeaDob":"1-6-2001",
        "zeaAdd":"Salem",
        "zeaMail":"manisaratha12@gmail.com",
        "zeaNum":"9872770000",
        "zeaCourse":"R-programming Full Stack",
        "zeaPayment":"card",
        "zeaSkills":["Tamil","English"]
    }
]

export const list=()=>
{
    return mystudents
}
export const create=(obj)=>
{
    mystudents.push(obj)
}