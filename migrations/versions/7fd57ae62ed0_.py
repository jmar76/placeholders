"""empty message

Revision ID: 7fd57ae62ed0
Revises: e3fb3c4eea13
Create Date: 2021-04-20 18:36:33.021349

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '7fd57ae62ed0'
down_revision = 'e3fb3c4eea13'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('amenidades', sa.Column('amenity', sa.String(length=120), nullable=False))
    op.drop_column('amenidades', 'aire_acondicionado')
    op.drop_column('amenidades', 'agua_caliente')
    op.drop_column('amenidades', 'cocina')
    op.drop_column('amenidades', 'parking')
    op.drop_column('amenidades', 'piscina')
    op.drop_column('amenidades', 'chimenea')
    op.drop_column('amenidades', 'zona_trabajo')
    op.drop_column('amenidades', 'calefaccion')
    op.drop_column('amenidades', 'tv')
    op.drop_column('amenidades', 'wifi')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('amenidades', sa.Column('wifi', sa.BOOLEAN(), autoincrement=False, nullable=False))
    op.add_column('amenidades', sa.Column('tv', sa.BOOLEAN(), autoincrement=False, nullable=False))
    op.add_column('amenidades', sa.Column('calefaccion', sa.BOOLEAN(), autoincrement=False, nullable=False))
    op.add_column('amenidades', sa.Column('zona_trabajo', sa.BOOLEAN(), autoincrement=False, nullable=False))
    op.add_column('amenidades', sa.Column('chimenea', sa.BOOLEAN(), autoincrement=False, nullable=False))
    op.add_column('amenidades', sa.Column('piscina', sa.BOOLEAN(), autoincrement=False, nullable=False))
    op.add_column('amenidades', sa.Column('parking', sa.BOOLEAN(), autoincrement=False, nullable=False))
    op.add_column('amenidades', sa.Column('cocina', sa.BOOLEAN(), autoincrement=False, nullable=False))
    op.add_column('amenidades', sa.Column('agua_caliente', sa.BOOLEAN(), autoincrement=False, nullable=False))
    op.add_column('amenidades', sa.Column('aire_acondicionado', sa.BOOLEAN(), autoincrement=False, nullable=False))
    op.drop_column('amenidades', 'amenity')
    # ### end Alembic commands ###
