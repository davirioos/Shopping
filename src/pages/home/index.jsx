import { useState } from 'react';
import Produtos from '../../components/produtos';
import Oculos from '../../components/produtos/indexOculos.jsx';
import Sapato from '../../components/produtos/indexSapato.jsx';
import Carrinho from '../../img/icons8-carrinho-50.png'
import Banner from '../../img/banner-store.jpg';
import Camisa from '../../img/camisa1.webp';
import Oculos1 from '../../img/oculos1.webp'
import Sapato1 from '../../img/sapato1.webp'
import './style.css';

export default function Home() {
  const [categoriaAtual, setCategoriaAtual] = useState(null);
  const [carrinho, setCarrinho] = useState([]);
  const [produtos] = useState([...Produtos]);
  const [oculos] = useState([...Oculos]);
  const [sapato] = useState([...Sapato]);

  // for (const [id, src, valor] of Object.entries(Produtos)) {
  //   let produtoss = [src.id, src.src, src.valor]
  // }

  const toAppear = (categoria) => {
    
    setCategoriaAtual(categoria);
  };
  const adicionarAoCarrinho = (produto) => {
    const shoppingCart = [...carrinho, produto];
    setCarrinho(shoppingCart)
  }
  const removeProduto = (index) => {
    const novoCarrinho = [...carrinho];
    novoCarrinho.splice(index, 1);
    setCarrinho(novoCarrinho);
  };
  return(
  <>
    <div className='mainOfContainer'>
      <div className='containerHeader'>
        <h1>SHOP</h1>
        <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><img src={Carrinho} width={'40px'}/></button>

        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasRightLabel">Carrinho de Compras</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul>
              {carrinho.map((produto, index) => (
              <li key={index} className='contaierCarrinhoProduto'>
                <img src={produto.src}/>
                <h3>{produto.valor}</h3>
                <button onClick={ () => removeProduto(index)}>Remover</button>
              </li>
            ))}
            </ul>
          </div>
          <button className='finalizaCompras'>Finalizar Compras</button>
        </div>
      </div>
      <div className='containerOne'>
        <img src={Banner}/>
      </div>
      <div className='containerTwo'>
        <div className='containerPromotion'>
          <img src={Camisa}/>
          <div>
            <h3>Camisas <br/>Pague 1 leve 2</h3>
            <button>Por R$100,00</button>
          </div>
        </div>
        <div className='containerPromotion'>
          <img src={Oculos1}/>
          <div>
            <h3>Oculos com <br/>50% de desconto</h3>
            <button>Por R$99,90</button>
          </div>
        </div>
        <div className='containerPromotion'>
          <img src={Sapato1}/>
          <div>
            <h3>Sapatos <br/> Pague 1 leve 3</h3>
            <button>Por R$129,00</button>
          </div>
        </div>
      </div>
      <div className='containerThree'>
        <button onClick={() => toAppear('shirt')}>Camisa</button>
        <button onClick={() => toAppear('glasses')}>Óculos</button>
        <button onClick={() => toAppear('shoes')}>Sapatos</button>
      </div>
      <div className='containerProducts'>
        {categoriaAtual === 'shirt' && <div className='shirt'>
          
          {produtos.map((index) => (
            <div className='containerProduct' key={index}>
              <img src={index.src}/>
              <p><s>R$ 100,00 Por</s></p>
              <p>{index.valor}</p>
              <button onClick={() => adicionarAoCarrinho(index)}>Comprar</button>
            </div> 
          ))}
          
        </div>}
        {categoriaAtual === 'glasses' && <div className='glasses'>
            {oculos.map((index) => (
            <div className='containerProduct' key={index}>
              <img src={index.src}/>
              <p><s>R$ 100,00 Por</s></p>
              <p>{index.valor}</p>
              <button onClick={() => adicionarAoCarrinho(index)}>Comprar</button>
            </div> 
          ))}
          
          </div>}
        {categoriaAtual === 'shoes' && <div className='shoes'>
          {sapato.map((index) => (
            <div className='containerProduct' key={index}>
              <img src={index.src}/>
              <p><s>R$ 100,00 Por</s></p>
              <p>{index.valor}</p>
              <button onClick={() => adicionarAoCarrinho(index)}>Comprar</button>
            </div> 
          ))}
          
        </div>}
      </div>
    </div>
  </>  
  )
}