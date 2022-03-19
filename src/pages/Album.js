import React from 'react';
import { useLocation } from 'react-router-dom';
import "./Album.css"
import OpenSea from "../images/opensea.png"
import { ClockCircleOutlined } from "@ant-design/icons"
import { useAlbum } from '../hooks/useAlbum'


const Album = ({setNftAlbum}) => {
  const { state: album } = useLocation()

  // Comment: will keep just in case of test
  // const albumDetails = [
  //   {
  //     "token_address": "0x8a68d4e28515815cd6026416f4b2a4b647796f3e",
  //     "token_id": "4",
  //     "amount": "1",
  //     "contract_type": "ERC721",
  //     "name": "Shadow",
  //     "symbol": "shad",
  //     "token_uri": "https://gateway.moralisipfs.com/ipfs/QmcfAiN4gVRFDB3uqQKAN1hgpFk3bDG3hVVV2bBnDZNYSD/metadata/3.json",
  //     "metadata": "{\"image\":\"ipfs://QmX5NMV8hh1g5EcebX1e2Y55uQnVnKPk8YzW37wpnRWfXp/media/6\",\"name\":\"Head Shoulder\",\"animation_url\":\"ipfs://QmX5NMV8hh1g5EcebX1e2Y55uQnVnKPk8YzW37wpnRWfXp/media/3\",\"duration\":\"0:09\",\"artist\":\"Snoop Jay\",\"year\":\"2022\"}",
  //     "synced_at": "2022-03-04T09:06:55.133Z"
  //   },

  //   {
  //     "token_address": "0x8a68d4e28515815cd6026416f4b2a4b647796f3e",
  //     "token_id": "6",
  //     "amount": "1",
  //     "contract_type": "ERC721",
  //     "name": "Shadow",
  //     "symbol": "shad",
  //     "token_uri": "https://gateway.moralisipfs.com/ipfs/QmcfAiN4gVRFDB3uqQKAN1hgpFk3bDG3hVWV2bBnDZNYSD/metadata/5.json",
  //     "metadata": "{\"image\":\"ipfs://QmX5NMV8hh1g5EcebX1e2Y55uQnVnKPk8YzW37wpnRWfXp/media/6\",\"name\":\"Pizza with a Coke\",\"animation_url\":\"ipfs://QmX5NMV8hh1g5EcebX1e2Y55uQnVnKPk8YzW37WpNRWfXp/media/5\",\"duration\":\"0:09\",\"artist\":\"Snoop Jay\", \"year\":\"2022\"}",
  //     "synced_at": "2022-03-04T09:06:55.133Z"
  //   },
  //   {
  //     "token_address": "0x8a68d4e28515815cd6026416f4b2a4b647796f3e",
  //     "token_id": "4",
  //     "amount": "1",
  //     "contract_type": "ERC721",
  //     "name": "Shadow",
  //     "symbol": "shad",
  //     "token_uri": "https://gateway.moralisipfs.com/ipfs/QmcfAiN4gVRFDB3uqQKAN1hgpFk3bDG3hVVV2bBnDZNYSD/metadata/3.json",
  //     "metadata": "{\"image\":\"ipfs://QmX5NMV8hh1g5EcebX1e2Y55uQnVnKPk8YzW37wpnRWfXp/media/6\",\"name\":\"Head Shoulder\",\"animation_url\":\"ipfs://QmX5NMV8hh1g5EcebX1e2Y55uQnVnKPk8YzW37wpnRWfXp/media/3\",\"duration\":\"0:09\",\"artist\":\"Snoop Jay\",\"year\":\"2022\"}",
  //     "synced_at": "2022-03-04T09:06:55.133Z"
  //   },
  //   {
  //     "token_address": "0x8a68d4e28515815cd6026416f4b2a4b647796f3e",
  //     "token_id": "6",
  //     "amount": "1",
  //     "contract_type": "ERC721",
  //     "name": "Shadow",
  //     "symbol": "shad",
  //     "token_uri": "https://gateway.moralisipfs.com/ipfs/QmcfAiN4gVRFDB3uqQKAN1hgpFk3bDG3hVWV2bBnDZNYSD/metadata/5.json",
  //     "metadata": "{\"image\":\"ipfs://QmX5NMV8hh1g5EcebX1e2Y55uQnVnKPk8YzW37wpnRWfXp/media/6\",\"name\":\"Pizza with a Coke\",\"animation_url\":\"ipfs://QmX5NMV8hh1g5EcebX1e2Y55uQnVnKPk8YzW37WpNRWfXp/media/5\",\"duration\":\"0:09\",\"artist\":\"Snoop Jay\", \"year\":\"2022\"}",
  //     "synced_at": "2022-03-04T09:06:55.133Z"
  //   },
  // ]
  const { albumDetails } = useAlbum(album.contract)
  return (
    <>
      <div className='albumContent'>
        <div className='topBan'>
          <img
            // src={album.image}
            src={albumDetails && JSON.parse(albumDetails[0].metadata).image}
            alt="albumcover"
            className="albumCover" />
          <div className='albumDeets'>
            <div>ALBUM</div>
            <div className='title'>{albumDetails && albumDetails[0].name}</div>
            <div className='artist'>
              {albumDetails && albumDetails[0].symbol}
            </div>
            <div>
              {albumDetails && albumDetails[0].synced_at.slice(0,4)} •{" "}
              {albumDetails && albumDetails.length} Songs
            </div>
          </div>
        </div>
        <div className='topBan'>
          <div className='playButton' onClick={() => setNftAlbum(albumDetails)}>
            PLAY
          </div>
          <div
            className='openButton'
            onClick={() =>
              window.open(
                `https://testnets.opensea.io/assets/mumbai/${album.contract}/1`
              )}
          >
            OpenSea
            <img src={OpenSea} className="openLogo" />
          </div>
        </div>
        <div className='tableHeader'>
          <div className='numberHeader'>#</div>
          <div className='titleHeader'>TITLE</div>
          <div className='numberHeader'>
            <ClockCircleOutlined />
          </div>
        </div>
        {albumDetails &&
          albumDetails.map((nft, i) => {
            nft = JSON.parse(nft.metadata)
            return (
              <>
                <div className='tableContent'>
                  <div className='numberHeader'>{i + 1}</div>
                  <div
                    className='titleHeader'
                    style={{ color: "rgb(205,203,203)" }}
                  >
                    <p>Here goes name song</p>
                  </div>
                  <div className='numberHeader'>here goes duration song</div>
                </div>
              </>
            )
          })}
      </div>
    </>
  )
}

export default Album;
