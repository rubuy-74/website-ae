
async function main() {
    //TODO:
}

main()
    .then(async () => {
        //await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        //await prisma.$disconnect()
        process.exit(1)
    })