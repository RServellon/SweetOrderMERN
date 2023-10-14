import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Menu from '../../ReuseComponents/Menu';
import { getPackById } from '../../../services/axiosClientService';
import PackEspecíficoInformacion from './PackEspecíficoInformacion';
import Header from '../../ReuseComponents/HeaderClientes';

const PackEspecifico = () => {
    const { id } = useParams();
    const [pack, setPack] = useState(null);

    const getPackage = async (id) => {
        try {
            const response = await getPackById(id);
            if (response.status === 200) {
                setPack(response.data);
            }
        } catch (error) {
            alert('Something went wrong: ' + error);
        }
    }

    useEffect(() => {
        getPackage(id);
    }, [id]);

    return (
        <div>
            <Header />
            <Menu />
            {pack ? (
                <PackEspecíficoInformacion pack={pack} />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default PackEspecifico;
