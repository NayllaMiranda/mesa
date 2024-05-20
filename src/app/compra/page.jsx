import React, { useState } from 'react';

const PurchaseTable = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode fazer a lógica para enviar os dados para o servidor
    console.log('Dados enviados:', { name, email, phone, address, paymentMethod, file });
  };

  return (
    <div>
      <h2>Realizar Compra</h2>
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <label for="name">Nome:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </li>
          <li>
            <label for="email">E-mail:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </li>
          <li>
            <label for="phone">Telefone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              required
            />
          </li>
          <li>
            <label for="address">Endereço:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              required
            />
          </li>
          <li>
            <div class="col-md-3">
              <label for="validationDefault04" class="form-label">
                Metodo de pagamento
              </label>
              <select
                class="form-select"
                id="validationDefault04"
                value={paymentMethod}
                onChange={(event) => setPaymentMethod(event.target.value)}
                required
              >
                <option selected disabled value="">
                  Choose...
                </option>
                <option>Pix</option>
                <option>Boleto</option>
                <option>Dinheiro</option>
              </select>
            </div>
          </li>
          <li>
            <div class="mb-3">
              <input
                type="file"
                class="form-control"
                aria-label="file example"
                onChange={(event) => setFile(event.target.files[0])}
                required
              />
              <div class="invalid-feedback">Comprovante</div>
            </div>
          </li>
          <li>
            <button type="submit" class="btn btn-outline-dark">
              Confirmar
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default PurchaseTable;fa