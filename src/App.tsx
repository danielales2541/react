// import React, { useState } from 'react';
// import axios from 'axios';
// import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';

// function App() {
//   const [senderUrl, setSenderUrl] = useState('https://ilp.interledger-test.dev/prueba-mvr');
//   const [receiverUrl, setReceiverUrl] = useState('https://ilp.interledger-test.dev/8f22ad51');
//   const [amount, setAmount] = useState('5055');

//   // Estado para la respuesta de la API del primer paso
//   const [apiResponse, setApiResponse] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState('');

//   // Nuevo estado para la respuesta de la API del segundo paso
//   const [isCompleting, setIsCompleting] = useState(false);
//   const [finalPaymentResult, setFinalPaymentResult] = useState(null);
//   const [completeError, setCompleteError] = useState('');

//   // Función para manejar la petición al primer endpoint
//   const handleStartPayment = async () => {
//     setIsLoading(true);
//     setError('');
//     setApiResponse(null);

//     try {
//       const response = await axios.post('http://localhost:3000/api/start-pay', {
//         senderWalletAddressUrl: senderUrl,
//         receiverWalletAddressUrl: receiverUrl,
//         amount: amount,
//       });

//       if (response.data.success) {
//         setApiResponse(response.data);
//       } else {
//         setError(response.data.message || 'Error desconocido.');
//       }
//     } catch (err) {
//       console.error(err);
//       setError('Error al conectar con el servidor. Asegúrate de que está funcionando.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Función para manejar la petición al segundo endpoint
//   const handleCompletePayment = async () => {
//     setIsCompleting(true);
//     setCompleteError('');
//     setFinalPaymentResult(null);

//     // try {
//     //   // Usar los datos guardados del primer paso para la segunda petición
//     //   const response = await axios.post('http://localhost:3000/api/complete-pay', {
//     //     continueUri: apiResponse.continueUri,
//     //     accessToken: apiResponse.continueAccessToken,
//     //     quoteId: apiResponse.quoteId,
//     //     sendingWalletAddressId: apiResponse.sendingWalletAddressId,
//     //     sendingWalletResourceServer: apiResponse.sendingWalletResourceServer,
        
        
//     //   });
//       console.log("response.data",apiResponse);

//       if (response.data.success) {
//         setFinalPaymentResult(response.data);
//         console.log('Pago completado con éxito:',response.data);
        
//       } else {
//         setCompleteError(response.data.message || 'Error al completar el pago.');
//       }
//     } catch (err) {
//       console.error(err);
//       setCompleteError('Error al finalizar el pago. Revisa la consola para más detalles.');
//     } finally {
//       setIsCompleting(false);
//     }
//   };

//   // Función para abrir la URL de redirección
//   const launchRedirectUrl = () => {
//     // if (apiResponse && apiResponse.redirectUrl) {
//     //   window.open(apiResponse.redirectUrl, '_blank');
//     // }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-8 flex items-center justify-center font-sans">
//       <div className="max-w-xl w-full bg-white rounded-xl shadow-lg p-6">
//         <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Cliente de Open Payments</h1>
        
//         {/* Sección de entrada de datos */}
//         <div className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">URL de la Billetera Emisora</label>
//             <input
//               type="text"
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 transition duration-150 ease-in-out p-2"
//               value={senderUrl}
//               onChange={(e) => setSenderUrl(e.target.value)}
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">URL de la Billetera Receptora</label>
//             <input
//               type="text"
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 transition duration-150 ease-in-out p-2"
//               value={receiverUrl}
//               onChange={(e) => setReceiverUrl(e.target.value)}
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Monto</label>
//             <input
//               type="number"
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 transition duration-150 ease-in-out p-2"
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//             />
//           </div>
//         </div>

//         {/* Botón de inicio de pago */}
//         <button
//           onClick={handleStartPayment}
//           disabled={isLoading || isCompleting}
//           className="mt-6 w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
//         >
//           {isLoading ? 'Iniciando...' : '1. Iniciar Pago'}
//         </button>

//         {/* Sección de resultados y errores */}
//         {error && (
//           <div className="mt-4 p-3 rounded-md bg-red-100 text-red-700">
//             <p className="text-sm font-medium">{error}</p>
//           </div>
//         )}

//         {/* Sección del segundo paso (se muestra solo después del primer paso) */}
//         {apiResponse && (
//           <div className="mt-6">
//             <div className="p-4 rounded-md bg-green-100 border border-green-300">
//               <h3 className="text-lg font-bold text-green-800">Paso 1: Pago iniciado con éxito</h3>
//               <p className="mt-2 text-sm text-gray-800">
//                 Haz clic en el botón para aprobar la transacción.
//               </p>
//               <button
//                 onClick={launchRedirectUrl}
//                 className="mt-4 w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
//               >
//                 <ArrowTopRightOnSquareIcon className="h-4 w-4 mr-2" />
//                 Abrir URL de Redirección
//               </button>
//             </div>
            
//             <button
//               onClick={handleCompletePayment}
//               disabled={isCompleting}
//               className="mt-4 w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               {isCompleting ? 'Finalizando...' : '2. Finalizar Pago'}
//             </button>
//           </div>
//         )}

//         {/* Sección del resultado final del pago */}
//         {completeError && (
//           <div className="mt-4 p-3 rounded-md bg-red-100 text-red-700">
//             <p className="text-sm font-medium">{completeError}</p>
//           </div>
//         )}
        
//         {finalPaymentResult && (
//           <div className="mt-4 p-3 rounded-md bg-blue-100 text-blue-700 flex items-center">
//             <CheckCircleIcon className="h-6 w-6 mr-2" />
//             <p className="text-sm font-medium">El pago se ha completado con éxito.</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };
// export default App
