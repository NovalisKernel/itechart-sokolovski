const getContacts = (req, res) => {
    const { quer } = req.query;

    const result = service.getAllContacts();
    result ? res.send({ message: "Error" }) : res.send(result)
}