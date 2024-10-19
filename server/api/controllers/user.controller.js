export const getUsers = (req, res) => {
    try {
        res.json({message: 'get users'});
    } catch (error) {
        console.error(`Đã có lỗi ${error}`);
    }
}