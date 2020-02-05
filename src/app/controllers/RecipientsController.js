import * as Yup from 'yup' // não funfa o normal pq o yup n tem export default
import Recipients from '../models/Recipients'

class RecipientsController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      rua: Yup.string().required(),
      numero: Yup.number().required(),
      complemento: Yup.string().required(),
      estado: Yup.string().required(),
      cidade: Yup.string().required(),
      cep: Yup.number().required(),
    })

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fails' })
    }

    const recipientExists = await Recipients.findOne({
      where: { name: req.body.name },
    })

    if (recipientExists) {
      return res.status(400).json({ error: 'Recipient already exists.' })
    }

    const recipient = await Recipients.create(req.body)

    return res.json(recipient)
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      rua: Yup.string(),
      numero: Yup.number(),
      complemento: Yup.string(),
      estado: Yup.string(),
      cidade: Yup.string(),
      cep: Yup.number(),
    })

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fails' })
    }

    const { id } = req.params
    const { name } = req.body

    const recipient = await Recipients.findByPk(id)

    if (name && name !== recipient.name) {
      const recipientExists = await Recipients.findOne({
        where: { name: req.body.name },
      })

      if (recipientExists) {
        return res.status(400).json({ error: 'Recipient already exists' })
      }
    }

    const recipient_updated = await recipient.update(req.body)

    return res.json(recipient_updated)
  }
}

export default new RecipientsController()
