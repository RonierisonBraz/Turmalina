module.exports = (sequelize, DataTypes) => {

    const ItensPedido = sequelize.define(
        'ItensPedido', {
        valor: DataTypes.DOUBLE,
        quantidade: DataTypes.INTEGER,
        valor_total: DataTypes.DOUBLE,
        pedidos_id: DataTypes.INTEGER,
        produtos_id: DataTypes.INTEGER
    }, {
        tableName: 'itens_pedidos',
        timestamps: false
    });

    ItensPedido.associate = (models) => {
        ItensPedido.hasOne(models.Pedido, { as: "pedido", foreignKey: "pedidos_id" });
        ItensPedido.hasMany(models.Produto, { as: "produto", foreignKey: "produtos_id" });
    }

    return ItensPedido;
}