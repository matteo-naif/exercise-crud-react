# Exercise

## Step 01

- Nel file `api.ts` aggiungi la funzione `fetchUserList` per effettuare il fetching dei dati
- in `index.tsx`effettua il fetching dei dati usando react-query
- utilizza `ts-pattern` per gestire gli stati della query

## Step 2

- Definisci il model `UserModel` usando `io-ts`
- Usa il modello per validare il JSON in entrata

## Step 3

- Crea un component `userList` che renderizza il risultato della fetch di dati
- Visualizza i dati restituiti con il componente Table

## Step 4

- Per ogni user, mostra un bottone per cancellarlo
- Nel file `api.ts` aggiungi la funzione `deleteUser`
- utilizza una mutation per gestire la delete
- se la delete viene eseguita correttamente mostra un 
