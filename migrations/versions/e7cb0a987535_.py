"""empty message

Revision ID: e7cb0a987535
Revises: 
Create Date: 2021-04-23 17:18:05.079578

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'e7cb0a987535'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('amenidades',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('amenity', sa.String(length=120), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=False),
    sa.Column('lastname', sa.String(length=120), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=256), nullable=False),
    sa.Column('is_active', sa.Boolean(), nullable=False),
    sa.Column('token', sa.String(length=254), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('token')
    )
    op.create_table('propiedad',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('calle', sa.String(length=120), nullable=False),
    sa.Column('numero', sa.String(length=120), nullable=False),
    sa.Column('ciudad', sa.String(length=120), nullable=False),
    sa.Column('codigo_postal', sa.String(length=120), nullable=False),
    sa.Column('provincia', sa.String(length=120), nullable=False),
    sa.Column('dormitorios', sa.String(length=120), nullable=False),
    sa.Column('huespedes', sa.String(length=120), nullable=False),
    sa.Column('camas', sa.String(length=120), nullable=False),
    sa.Column('bathrooms', sa.String(length=120), nullable=False),
    sa.Column('descripcion', sa.String(length=120), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('association',
    sa.Column('propiedad_id', sa.Integer(), nullable=True),
    sa.Column('amenidades_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['amenidades_id'], ['amenidades.id'], ),
    sa.ForeignKeyConstraint(['propiedad_id'], ['propiedad.id'], )
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('association')
    op.drop_table('propiedad')
    op.drop_table('user')
    op.drop_table('amenidades')
    # ### end Alembic commands ###
